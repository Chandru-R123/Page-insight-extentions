const typeEl = document.getElementById("type");
const sentimentEl = document.getElementById("sentiment");
const summaryEl = document.getElementById("summary");

document.getElementById("analyze").addEventListener("click", () => {
  // Set icon to active when analysis starts
  chrome.action.setIcon({
    path: {
      16: "icons/active16.png",
      48: "icons/active48.png"
    }
  });

  // Show loading
  typeEl.innerText = "Loading...";
  sentimentEl.innerText = "Loading...";
  summaryEl.innerText = "Loading...";

  // Get active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs || !tabs[0]) {
      typeEl.innerText = "No active tab";
      // Reset icon
      resetIcon();
      return;
    }

    // Send message to content.js to extract text
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "extractText" },
      async (response) => {
        if (!response || !response.text) {
          typeEl.innerText = "No text found";
          sentimentEl.innerText = "N/A";
          summaryEl.innerText = "No summary available";
          resetIcon();
          return;
        }

        try {
          const res = await fetch("http://localhost:5000/summarize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: response.text })
          });

          const data = await res.json();

          typeEl.innerText = data.type || "N/A";
          sentimentEl.innerText = data.sentiment || "N/A";
          summaryEl.innerText = data.summary || "No summary available";
        } catch (err) {
          console.error(err);
          typeEl.innerText = "Error";
          sentimentEl.innerText = "N/A";
          summaryEl.innerText = "Backend error";
        } finally {
          // Reset icon after output is produced
          resetIcon();
        }
      }
    );
  });
});

// Function to reset icon to normal
function resetIcon() {
  chrome.action.setIcon({
    path: {
      16: "icons/normal16.png",
      48: "icons/normal48.png"
    }
  });
}

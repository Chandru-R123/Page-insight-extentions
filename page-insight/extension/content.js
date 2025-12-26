// Extract visible text from page
function getVisibleText() {
  const elements = document.body.querySelectorAll("*");
  let text = "";

  elements.forEach(el => {
    const style = window.getComputedStyle(el);
    if (
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      el.innerText
    ) {
      text += el.innerText + " ";
    }
  });

  // Limit to 5000 characters for AI processing
  return text.substring(0, 5000);
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "extractText") {
    sendResponse({ text: getVisibleText() });
  }
});

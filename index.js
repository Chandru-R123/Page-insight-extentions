import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  const text = req.body.text;

  // Safety check
  if (!text || text.trim().length === 0) {
    return res.json({
      summary: "No text provided",
      type: "N/A",
      sentiment: "N/A"
    });
  }

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost",
          "X-Title": "Page Insight"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1",
          temperature: 0.2,
          max_tokens: 250,
          messages: [
            {
              role: "system",
              content: `
You are a sentiment classifier.

STRICT RULES:
- Output ONLY valid JSON
- Do NOT include explanations
- Do NOT include thinking
- You MUST choose ONE sentiment

Sentiment rules:
- Positive → improvement, success, benefits
- Negative → harm, crisis, loss, danger
- Neutral → ONLY technical topics with no human impact

JSON FORMAT:
{
  "summary": "Maximum 5 short lines",
  "type": "Article | Blog | News | Tutorial | Other",
  "sentiment": "Positive | Neutral | Negative"
}
              `
            },
            {
              role: "user",
              content: `
Analyze the following webpage text.
Determine sentiment based on overall impact on human life and society.

TEXT:
${text.substring(0, 1500)}
              `
            }
          ]
        })
      }
    );

    const data = await response.json();

    let aiText =
      data?.choices?.[0]?.message?.content?.trim() || "";

    // Remove code blocks if model adds them
    aiText = aiText.replace(/```json|```/g, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(aiText);
    } catch (err) {
      console.error("JSON parse failed:", aiText);
      parsed = {
        summary: "Unable to generate summary",
        type: "Other",
        sentiment: "Neutral"
      };
    }

    res.json({
      summary: parsed.summary || "No summary available",
      type: parsed.type || "N/A",
      sentiment: parsed.sentiment || "N/A"
    });

  } catch (error) {
    console.error("Backend error:", error);
    res.json({
      summary: "Error generating summary",
      type: "N/A",
      sentiment: "N/A"
    });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running on http://localhost:5000");
});

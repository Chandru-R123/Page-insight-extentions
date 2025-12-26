# 📄 Page Insight – AI Browser Extension

## 🔍 Overview

**Page Insight** is an AI-powered Chrome browser extension that helps users quickly understand the content of any webpage.  
It analyzes **only the visible text** on a webpage and provides:

- 📌 Page Type  
- 😊 Sentiment  
- 📝 Short, accurate summary  

This helps users save time and get instant insights without reading long articles.

---

## 🎯 Problem Statement

Users often visit webpages containing long articles, blogs, or documentation.  
Reading the full content is time-consuming.

**Page Insight solves this problem by:**
- Summarizing content into 5 lines  
- Identifying the type of webpage  
- Detecting the overall sentiment  

---

## 💡 Solution

Page Insight uses:
- A **Chrome extension** to extract visible webpage text
- A **Node.js backend API**
- An **AI language model (DeepSeek via OpenRouter)**

The system processes content quickly and displays results directly in the extension popup.

---

## 🚀 Features

- Extracts **visible content only** (ignores hidden text)
- AI-powered **5-line summary**
- Detects **Page Type**
  - Article
  - Blog
  - News
  - Tutorial
  - Other
- Detects **Sentiment**
  - Positive
  - Neutral
  - Negative
- Simple and clean UI
- Fast response
- Privacy-friendly (no storage of user data)

---

## 🛠️ Technology Stack

### Frontend (Chrome Extension)
- HTML
- CSS
- JavaScript
- Chrome Extension API (Manifest V3)

### Backend
- Node.js
- Express.js
- CORS
- OpenRouter API
- DeepSeek LLM

---

## 🧠 Architecture

User Clicks Analyze<br>
↓
Popup Script (popup.js)
↓
Content Script (content.js)
↓
Backend API (Express)
↓
AI Model (DeepSeek)
↓
Response (JSON)
↓
Results Displayed in Popup


---

## ⚙️ How It Works (Step-by-Step)

1. User opens any webpage
2. User clicks **Analyze** button
3. Content script extracts visible text
4. Text is sent to backend API
5. AI model analyzes the content
6. Backend returns:
   - Summary
   - Page Type
   - Sentiment
7. Popup displays the result

---

## 📁 Project Structure

page-insight/
│
├── extension/
│ ├── manifest.json
│ ├── popup.html
│ ├── popup.css
│ ├── popup.js
│ ├── content.js
│ └── icons/
│ ├── icon16.png
│ ├── icon48.png
│ └── icon128.png
│
├── backend/
│ ├── index.js
│ ├── package.json
│ ├── package-lock.json
│ └── .env
│
└── README.md

---

## 🔑 Environment Configuration

Create a `.env` file inside the **backend** folder:

OPENROUTER_API_KEY=your_openrouter_api_key

---

## ▶️ Installation & Setup

### 1️⃣ Backend Setup

```bash
cd backend
npm install
node index.js
Backend will run at:

http://localhost:5000
Chrome Extension Setup

Open Google Chrome

Go to chrome://extensions

Enable Developer Mode

Click Load Unpacked

Select the extension folder

Extension will appear in the toolbar

🧪 Testing

You can test using:

Wikipedia articles

Blog posts

News websites

Documentation pages

Click Analyze and wait a few seconds for results.

🔒 Privacy & Security

No browsing data is stored

No personal information collected

Only visible webpage content is analyzed

Works only on user request

📈 Advantages

Saves reading time

Improves productivity

Easy to use

Lightweight extension

AI-powered accuracy

🎓 Use Cases

Students summarizing articles

Researchers scanning papers

Developers reading documentation

Professionals reading news

General users saving time

🧾 Limitations

Depends on AI response speed

Requires internet connection

AI output may vary slightly

📌 Future Enhancements

Support for more languages

Keyword extraction

Highlight important sentences

Offline summarization

Support for Firefox & Edge

🏁 Conclusion

Page Insight is a simple yet powerful AI-based browser extension that enhances web browsing by providing instant summaries, sentiment analysis, and page classification.
It is ideal for anyone who wants quick insights without reading full content.

👨‍💻 Author

Project Name: Page Insight
Category: AI + Full Stack + Browser Extension
Purpose: Educational / Productivity Tool


---




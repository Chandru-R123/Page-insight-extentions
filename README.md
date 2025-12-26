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
Popup Script (popup.js)<br>
↓
Content Script (content.js)<br>
↓
Backend API (Express)<br>
↓
AI Model (DeepSeek)<br>
↓
Response (JSON)<br>
↓
Results Displayed in Popup<br>


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

page-insight/<br>
│<br>
├── extension/<br>
│ ├── manifest.json<br>
│ ├── popup.html<br>
│ ├── popup.css<br>
│ ├── popup.js<br>
│ ├── content.js<br>
│ └── icons/<br>
│ ├── icon16.png<br>
│ ├── icon48.png<br>
│ └── icon128.png<br>
│<br>
├── backend/<br>
│ ├── index.js<br>
│ ├── package.json<br>
│ ├── package-lock.json<br>
│ └── .env<br>
│<br>
└── README.md<br>

---

## 🔑 Environment Configuration

Create a `.env` file inside the **backend** folder:

OPENROUTER_API_KEY=your_openrouter_api_key

---

## ▶️ Installation & Setup

### 1️⃣ Backend Setup
cd backend<br>
npm install<br>
node index.js<br>
Backend will run at:<br>
http://localhost:5000<br>


### Chrome Extension Setup

Open Google Chrome<br>
Go to chrome://extensions<br>
Enable Developer Mode<br>
Click Load Unpacked<br>
Select the extension folder<br>
Extension will appear in the toolbar<br>

### Testing

You can test using:<br>
Wikipedia articles<br>
Blog posts<br>
News websites<br>
Documentation pages<br>
Click Analyze and wait a few seconds for results.<br>

### Privacy & Security

No browsing data is stored<br>
No personal information collected<br>
Only visible webpage content is analyzed<br>
Works only on user request<br>

### Advantages

Saves reading time<br>
Improves productivity<br>
Easy to use<br>
Lightweight extension<br>
AI-powered accuracy<br>

### Use Cases

Students summarizing articles<br>
Researchers scanning papers<br>
Developers reading documentation<br>
Professionals reading news<br>
General users saving time<br>

### Limitations

Depends on AI response speed<br>
Requires internet connection<br>
AI output may vary slightly<br>

### Future Enhancements

Support for more languages<br>
Keyword extraction<br>
Highlight important sentences<br>
Offline summarization<br>
Support for Firefox & Edge<br>

### Conclusion

Page Insight is a simple yet powerful AI-based browser extension that enhances web browsing by providing instant summaries, sentiment analysis, and page classification.<br>
It is ideal for anyone who wants quick insights without reading full content.<br>

### Author

Project Name: Page Insight<br>
Category: AI + Full Stack + Browser Extension<br>
Purpose: Educational / Productivity Tool<br>


---




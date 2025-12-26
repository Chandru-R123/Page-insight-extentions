# 📄 Page Insight – Browser Extension

## 🔍 Overview

**Page Insight** is an AI-powered browser extension that analyzes any webpage and provides:
- Page **Type**
- **Sentiment**
- Short **Summary**

It works by extracting only the **visible content** of the webpage and sending it to an AI model for fast analysis.

---

## 🎯 Problem Statement

When browsing the internet, users often don’t have time to read long articles or pages.  
Page Insight helps users quickly understand:
- What kind of page it is  
- The overall tone  
- A short and accurate summary  

---

## 🚀 Features

- Extracts **visible text only** from webpages  
- AI-generated **5-line summary**  
- Detects **page type** (Article, Blog, News, etc.)  
- Detects **sentiment** (Positive, Neutral, Negative)  
- Fast and lightweight  
- Privacy-friendly (no data storage)

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
- OpenRouter / DeepSeek LLM  
- REST API  

---

## ⚙️ How It Works

1. User opens a webpage  
2. Clicks **Analyze** in the extension popup  
3. Content script extracts visible text  
4. Text is sent to backend API  
5. AI model analyzes the text  
6. Results (Type, Sentiment, Summary) are shown in popup  

---

## 📁 Project Structure


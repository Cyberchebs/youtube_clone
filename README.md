# 📺 ViewTube

> A YouTube clone built with React — watch real YouTube videos with **live data and real-time updates**, straight from the YouTube API.

---

## 🎬 Overview

ViewTube replicates the core YouTube experience in a clean, modern interface. Browse trending videos, search for content, and watch real YouTube videos — all powered by live API data.

---

## ✨ Features

- 🔴 **Real-Time Video Streaming** — Watch actual YouTube videos with up-to-date content
- 🔍 **Search Functionality** — Search and discover videos instantly
- 📡 **Live YouTube Data** — Real-time updates via the YouTube Data API
- 🎨 **Sleek UI** — Clean, responsive design inspired by YouTube's interface
- 📱 **Fully Responsive** — Optimized for all screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev) | UI library & component architecture |
| [Axios](https://axios-http.com) | HTTP requests & YouTube API integration |
| [Material UI](https://mui.com) | Pre-built UI components & theming |
| [YouTube Data API v3](https://developers.google.com/youtube/v3) | Live video data & search results |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- A [YouTube Data API v3](https://console.cloud.google.com/) key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/viewtube.git
   cd viewtube
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   REACT_APP_YOUTUBE_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm start
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
viewtube/
├── public/
│   └── index.html
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── utils/            # Axios API config & helpers
│   ├── App.js            # Root component & routing
│   └── index.js          # Entry point
├── .env                  # API keys (never commit this!)
└── package.json
```

---

## 🔑 API Setup

This app uses the **YouTube Data API v3**. To get your key:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable the **YouTube Data API v3**
4. Generate an API key and paste it into your `.env` file

> ⚠️ Never commit your `.env` file. Make sure it's listed in `.gitignore`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or submit an issue.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


# News Scraper

This project is a full-stack web application for scraping, aggregating, and displaying news articles from various sources. Built with React on the client side and Node.js/Express on the server side, it features modern tooling and a responsive UI.

---

## Features

- 📰 Scrape and display news articles from multiple sources
- 🔍 Search and filter news by keywords or topics
- 🌐 Responsive and modern UI (React + TailwindCSS)
- ⚡ Fast client-side navigation (Vite)
- 🔗 Simple server API for scraping and aggregating news

---

## Project Structure

The repository is structured as a monorepo with separate client and server directories.


```
news_scraper/
│
├── client/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.cjs
│   ├── tailwind.config.cjs
│   └── vite.config.js
│
├── server/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── vercel.json
│
└── README.md
```

**Key Directories & Files:**
- `client/` – React frontend (with Vite, TailwindCSS)
- `server/` – Node.js/Express backend (API, news scraping)
- `README.md` – This file

---

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm (or yarn)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/Aaditya514/news_scraper.git
cd news_scraper
```

#### 2. Install dependencies for both client and server

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

#### 3. Running the development servers

- **Client:**  
  ```bash
  cd client
  npm run dev
  ```
  The frontend will be available at [http://localhost:5173](http://localhost:5173) (or as specified by Vite).

- **Server:**  
  ```bash
  cd server
  npm start
  ```
  The backend API will start on [http://localhost:3000](http://localhost:3000) (or as configured).

---

## Technologies Used

- **Frontend:** React, Vite, TailwindCSS
- **Backend:** Node.js, Express
- **Other:** HTML, CSS, JavaScript

---

## Usage

- Browse the latest scraped news on the homepage.
- Search and filter news by entering keywords.
- Click articles to view more details or navigate to the source.

---

## Contributing

Contributions are welcome!  
1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes  
4. Push to your branch  
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Aaditya514](https://github.com/Aaditya514)

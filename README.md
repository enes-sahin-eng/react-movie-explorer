# 🎬 React Movie Explorer

A modern web application where movie enthusiasts can discover the latest and most popular films, search for specific titles, and curate their personal watchlists. 

Designed with user experience at its core, this application integrates seamlessly with The Movie Database (TMDB) API to deliver comprehensive, real-time movie data. It strictly follows modern UI/UX standards and features a fully responsive design.

## 🚀 Live Demo
Check out the live version of the application here:
👉 **[react-movie-explorer-theta.vercel.app]**

## ✨ Key Features
* **Comprehensive Search & Pagination:** URL-based state management (`?q=batman&page=2`) allows users to easily share search results and navigate smoothly between pages.
* **Dynamic Movie Details:** View in-depth information for any selected movie, including the cast, director, producer, IMDB rating, runtime, and genres, all on a single dedicated screen.
* **Similar Movie Recommendations:** A dynamic recommendation engine that suggests movies similar to the one currently being viewed.
* **Personal Watchlist:** An interactive, dedicated space for users to add or remove their favorite movies with a single click.
* **Advanced Error & Loading State Management:** Custom `Loading` and `ErrorMessage` components ensure a seamless and uninterrupted user experience during API fetches.
* **Modular Architecture:** Built with React Router v6 using a `MainLayout` wrapper and strict separation of `pages/` and `components/`, ensuring maintainable and clean code.

## 🛠️ Tech Stack
* **Frontend Core:** React.js, React Router DOM
* **Styling & UI:** Bootstrap 5, Bootstrap Icons, Custom CSS
* **Data Fetching:** Fetch API, The Movie Database (TMDB) API
* **Deployment:** Vercel

## 📂 Folder Structure
The project is structured following the "Separation of Concerns" principle:
- `components/`: Reusable, independent UI pieces (Header, Footer, MovieList, Loading, etc.)
- `pages/`: Main views routed via React Router (Home, Movies, MovieDetails, SearchResults)
- `layouts/`: Wrapper components that hold the general skeleton of the pages (MainLayout)

## 🔮 Roadmap
* [ ] **Local Storage Integration:** Persist the Watchlist in the browser's local storage so it remains intact even after a page refresh.
* [ ] **Advanced Filtering:** Filter movies not just by name, but by genre (Action, Comedy), release year, and IMDB rating.
* [ ] **Environment Variables (.env):** Secure the TMDB API key by moving it out of the source code.
* [ ] **Dark/Light Mode:** Implement dynamic theme switching based on user preference.

## 👨‍💻 Developer
This project was developed to showcase proficiency in modern JavaScript, the React ecosystem, and modular UI design principles, aiming for global software engineering standards.

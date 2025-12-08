<h1>React Movie Explorer</h1>
  <p>A simple movie browsing app built with React and TMDB API. Explore popular movies, search for titles, and view movie details.</p>

  <h2>Features</h2>
  <ul>
    <li>View popular movies from TMDB</li>
    <li>Search movies by title</li>
    <li>Movie cards with poster, title, release year</li>
    <li>Responsive UI for all devices</li>
    <li>Loading and error handling</li>
  </ul>

  <h2>Tech Stack</h2>
  <ul>
    <li>React</li>
    <li>JavaScript (ES6+)</li>
    <li>TMDB API</li>
    <li>CSS</li>
  </ul>

  <h2>Project Structure</h2>
  <pre>
src/
 ├─ components/
 │   └─ MovieCard.jsx
 ├─ pages/
 │   └─ Home.jsx
 ├─ services/
 │   └─ api.js
 └─ css/
     ├─ Home.css
     └─ MovieCard.css
  </pre>

  <h2>Configuration</h2>
  <p>Add your TMDB API key in <code>src/services/api.js</code>:</p>
  <pre>
const API_KEY = "YOUR_TMDB_API_KEY";
  </pre>

  <h2>Running the Project</h2>
  <pre>
npm install
npm run dev
  </pre>

  <h2>Future Improvements</h2>
  <ul>
    <li>Movie details page</li>
    <li>Favorites using localStorage</li>
    <li>Animations and skeleton loaders</li>
    <li>Pagination or infinite scroll</li>
  </ul>

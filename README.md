<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>React Movie Explorer - README</title>
  <style>
    body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; line-height: 1.6; color: #111; margin: 0; padding: 24px; background: #fff; }
    .container { max-width: 900px; margin: 0 auto; }
    h1 { font-size: 28px; margin-bottom: 8px; }
    h2 { font-size: 20px; margin-top: 20px; margin-bottom: 8px; }
    p { margin: 8px 0; }
    pre { background: #f6f8fa; padding: 12px; border-radius: 6px; overflow: auto; }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace; }
    ul { margin: 8px 0 8px 20px; }
    .section { margin-bottom: 18px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>React Movie Explorer</h1>
    <p>A simple and modern movie browsing application built with React and powered by The Movie Database (TMDB) API. The app allows users to explore popular movies, search for any title, and view essential movie details inside a clean and responsive UI.</p>

    <div class="section">
      <h2>Features</h2>

      <h3>Popular Movies</h3>
      <ul>
        <li>Automatically loads trending and popular movies from TMDB when the app starts.</li>
      </ul>

      <h3>Search Movies</h3>
      <ul>
        <li>Search any movie using TMDB’s search API.</li>
        <li>Results update after submitting the search form.</li>
      </ul>

      <h3>Movie Cards</h3>
      <ul>
        <li>Each movie is displayed inside a card layout.</li>
        <li>Includes: movie poster, movie title, release year, and a favorite button (currently displays an alert).</li>
      </ul>

      <h3>Responsive UI</h3>
      <ul>
        <li>Fully responsive layout for mobile, tablet, and desktop.</li>
      </ul>

      <h3>Fast Performance</h3>
      <ul>
        <li>Uses <code>useEffect</code> for initial data loading.</li>
        <li>Handles loading states and errors.</li>
        <li>Prevents double API requests and empty searches.</li>
      </ul>
    </div>

    <div class="section">
      <h2>Tech Stack</h2>
      <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>TMDB API</li>
        <li>CSS (Flexbox / Grid)</li>
      </ul>
    </div>

    <div class="section">
      <h2>Project Structure</h2>
      <pre><code>src/
 ├── components/
 │    └── MovieCard.jsx
 ├── services/
 │    └── api.js
 ├── pages/
 │    └── Home.jsx
 ├── css/
 │    ├── Home.css
 │    └── MovieCard.css
</code></pre>
    </div>

    <div class="section">
      <h2>Configuration</h2>
      <p>Add your TMDB API key in <code>src/services/api.js</code>:</p>
      <pre><code>const API_KEY = "YOUR_TMDB_API_KEY";</code></pre>
    </div>

    <div class="section">
      <h2>Running the Project</h2>
      <pre><code>npm install
npm run dev
</code></pre>
    </div>

    <div class="section">
      <h2>Future Improvements</h2>
      <ul>
        <li>Add a movie details page</li>
        <li>Add favorite movies using localStorage</li>
        <li>Add animations and skeleton loaders</li>
        <li>Add pagination or infinite scroll</li>
      </ul>
    </div>
  </div>
</body>
</html>

import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/books/v3/lists.json?list=hardcover-fiction&api-key=${process.env.NYT_API_KEY}`)
      .then(res => res.json())
      .then(json => {
        console.log(json.results)
        setTitles(json.results);
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div>Titles</div>
        {titles.map(title =>
          <a href={title.amazon_product_url}>
            {title.book_details[0].title} by {title.book_details[0].author}
          </a>
        )}
      </header>
    </div>
  );
}

export default App;

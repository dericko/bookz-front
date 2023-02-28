import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_NYT_BOOKS_API`https://bookz-back.onrender.com/books?api-key=${process.env.REACT_APP_INTERNAL_SECRET}`)
      .then(res => res.json())
      .then(json => {
        console.log(json.results)
        setTitles(json.results);
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div>Current Top Sellers</div>
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

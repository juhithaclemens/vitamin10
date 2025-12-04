import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState("Click button for Quote of the Day!");

  const fetchQuote = async () => {
    const response = await fetch("http://localhost:5000/quote"); // update later for deployment
    const data = await response.json();
    setQuote(data.quote);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Quote of the Day</h1>
      <p style={{ fontSize: "20px", fontStyle: "italic" }}>{quote}</p>
      <button onClick={fetchQuote}>Get Quote</button>
    </div>
  );
}

export default App;

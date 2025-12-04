import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState("Click button for Quote of the Day!");

  const fetchQuote = async () => {
    const response = await fetch("https://vitamin10-z5od.onrender.com/quote"); 
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

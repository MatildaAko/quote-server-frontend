import React, { useState, useEffect } from "react";

import { QuotesButton } from "./QuotesButton";

export const QuotesCard = () => {
  const [quotes, setQuotes] = useState([]);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    fetch("https://matildaako-quote-server.glitch.me/quotes/random/")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      });
  }, [clicked]);
  
  return (
    <div className="quotes-card">
      <p className="quote">{quotes.quote}</p>
      <p className="author">{quotes.author}</p>
      <QuotesButton setClicked={setClicked} clicked={clicked} />
    </div>
  );
};

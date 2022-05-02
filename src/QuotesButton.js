import React from "react";


export const QuotesButton = ({ setClicked, clicked }) => {
  return <button onClick={() => setClicked(!clicked)}>New Quote</button>;
};

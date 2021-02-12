import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <h1 data-testid="title">{props.slides[index].title}</h1>
      <p data-testid="text">{props.slides[index].text}</p>
      <button
        data-testid="button-restart"
        disabled={index === 0}
        onClick={() => setIndex(0)}
      >
        Restart
      </button>
    );
  };


export default App;

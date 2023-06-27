import React, { useState } from "react";
import "./styles.css";

var mountainsList = { "Srinagar ": "4.25", Shimla: "3.5", Gulmarg: "4" };
var beachList = { Goa: "4.25", Kochi: "4" };
var spiritualList = {
  "Puri Jagannath": "5",
  "Kumbh Mela": "4.5",
  "Golden Temple": "4.25"
};

var selectedList = {};
var selectedBookArray = []; // Object.keys(fictionList);

export default function App() {
  var [currentGenre, setCurrentGenre] = useState("");

  function onButtonClick(genre) {
    currentGenre = genre;
    if (genre === "mountains") {
      selectedList = mountainsList;
      selectedBookArray = Object.keys(mountainsList);
    } else if (genre === "beach") {
      selectedList = beachList;
      selectedBookArray = Object.keys(beachList);
    } else if (genre === "spiritual") {
      selectedList = spiritualList;
      selectedBookArray = Object.keys(spiritualList);
    }

    setCurrentGenre(currentGenre);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="books">
          🎒
        </span>
        solo travel
      </h1>
      <p>Some cool places to travel to.</p>
      <ul className="button-list">
        <li>
          <button
            className="genre-button"
            onClick={() => onButtonClick("mountains")}
          >
            Mountains
          </button>
        </li>
        <li>
          <button
            className="genre-button"
            onClick={() => onButtonClick("beach")}
          >
            Beach
          </button>
        </li>
        <li>
          <button
            className="genre-button"
            onClick={() => onButtonClick("spiritual")}
          >
            Spiritual
          </button>
        </li>
      </ul>

      <hr />
      {selectedBookArray.map((item) => (
        // <h1>{item}</h1>
        <div id="book-container">
          <p id="title">{item}</p>
          <p id="rating">{selectedList[item] + "/5"}</p>
        </div>
      ))}
    </div>
  );
}

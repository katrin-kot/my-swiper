import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./component/App";

const slides = [
  {
    src:
      "https://s1.1zoom.ru/big0/697/Love_Night_Moon_Trees_Silhouette_Two_Dating_576752_1280x853.jpg",
    caption: "First",
    text: "Hello",
  },
  {
    src:
      "https://s1.1zoom.ru/big0/170/Love_Couples_in_love_Silhouette_Branches_Two_576007_1280x853.jpg",
    caption: "Second",
    text: "Hello",
  },
  {
    src:
      "https://s1.1zoom.ru/big0/629/Love_Night_Moon_Trees_Silhouette_Two_Dating_574587_1280x853.jpg",
    caption: "third",
    text: "Hello",
  },
];
const settings = { infinite: true, indicators: true };
ReactDOM.render(
  <App slides={slides} settings={settings} />,
  document.querySelector("#root")
);

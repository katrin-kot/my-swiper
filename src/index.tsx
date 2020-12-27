import React from "react";
import ReactDOM from "react-dom";
import Slider from "./component/Slider";

const settings = { infinite: true, indicators: true };

ReactDOM.render(
  <Slider settings={settings}>
    <img
      src="https://www.stb.ua/wp-content/uploads/sites/21/2016/04/13/1.jpg"
      alt=""
    />
    <div>Hello world!</div>
    <p>
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using Content here, content here, making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for lorem
      ipsum will uncover many web sites still in their infancy. Various versions
      have evolved over the years, sometimes by accident, sometimes on purpose
      (injected humour and the like).
    </p>
  </Slider>,
  document.querySelector("#root")
);

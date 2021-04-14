import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize,
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY);
  };
  handleKeyDown = (event) => {
    const key = event.key;
    if (key === "a") {
      resize("+");
    } else if (key === "s") {
      resize("-");
    }
  };

  render() {
    return (
      <canvas
        onKeyDown={this.handleKeyDown}
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling()}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    );
  }
}

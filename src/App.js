import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Blob from "./Blob";
import Effect from "./EffectOne";

const calcDistancePerVertex = (
  numOfPoints,
  width,
  height,
  centerX,
  centerY,
  numOfKeyframe
) => {};

// Timing and spacing
// var tns = spacing({
//   progression: [0, 0.2, 0.4, 0.6, 0.8, 1],
//   keyTimes: [0, null, null, null, null, 1],
//   keySplines: [
//     ".57,-0.31",
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     ".2,1.45"
//   ]
// });

var animateParameters = {
  numOfKeyPaths: 5,
  loop: true
};

var pathsParameters = {
  numOfSegments: 4,
  depth: 0,
  x: 10,
  y: 10,
  width: 1060,
  height: 1060,
  centerX: 530,
  centerY: 530,
  rotate: 0,
  numOfGroups: 2,
  incircle: true,
  groups: [
    {
      type: "radial",
      distance: [0.95, 1],
      round: 1
    },
    {
      type: "radial",
      distance: [1.3, 1.4],
      round: [0, 0.3]
    }
  ]
};

// const mrph = morphing(animateParameters, pathsParameters);
// console.log("animate value", mrph);

function App() {
  const [clickPos, setClickPos] = useState();
  const [isActive, setIsActive] = useState();

  const handleClick = e => {
    console.log("click event", e);
    setClickPos({ x: e.clientX, y: e.clientY });
    setIsActive(true);
  };

  useEffect(() => {
    if (clickPos && !isActive) {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
        setClickPos(undefined);
      }, 2200);
    }
  }, [clickPos, isActive]);

  useEffect(() => {
    window.addEventListener("click", handleClick);
  }, []);

  return (
    <div className="App">
      <div>
        {isActive && clickPos && (
          <Effect
            width={window.innerWidth}
            height={window.innerHeight}
            centerX={clickPos.x}
            centerY={clickPos.y}
          />
        )}
      </div>
    </div>
  );
}

export default App;

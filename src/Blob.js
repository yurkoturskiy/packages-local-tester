import React from "react";
import { morphing, spacing, path, phases, randomRange } from "primitivo-svg";

console.log("random range:", randomRange(0, 10));

const tsone = spacing({
  progression: [0, 0.25, 0.5, 0.75, 1],
  keySplines: "0.75, 0, 0.25, 1"
});

var morphingParams = {
  numOfKeyPaths: 5,
  loop: false
};

var pathsParams = {
  numOfSegments: 4,
  depth: 0,
  x: 10,
  y: 10,
  width: [2, 100, 200, 300, 400],
  height: 400,
  centerX: 200,
  centerY: 200,
  rotate: 45,
  numOfGroups: 2,
  groups: [
    {
      incircle: true,
      type: "radial",
      distance: 1,
      round: 1
    },
    {
      incircle: true,
      type: "radial",
      distance: 1,
      round: 1
    }
  ]
};

const animation = morphing(morphingParams, pathsParams);
console.log("dvalues", animation);

var pathParams = {
  numOfSegments: 4,
  x: 0,
  y: 0,
  width: window.innerWidth,
  height: window.innerHeight,
  centerX: 100,
  centerY: 100,
  rotate: 45,
  numOfGroups: 1,
  groups: [
    {
      incircle: false,
      distance: 1,
      radius: 50,
      round: [[0, 0], 0, [1, 1], 0],
      adaptArms: true,
      smartRound: true
    },
    {
      incircle: false,
      type: "linear",
      distance: 1,
      radius: 50,
      round: [1, 0, 1, 0],
      adaptArms: true,
      smartRound: true
    }
  ]
};

const one = path(pathParams);
console.log("path", one);

const phaseOutput = phases();
console.log("phase output", phaseOutput);
const ts = spacing({
  progression: phaseOutput.progressions,
  keySplines: "0.75, 0, 0.25, 1"
});
console.log("ts", ts);

function Blob() {
  return (
    <svg width={window.innerWidth} height={window.innerHeight}>
      {
        <path>
          <animate
            calcMode="spline"
            keyTimes={ts.keyTimes}
            keySplines={ts.keySplines}
            attributeName="d"
            dur="1500ms"
            repeatCount="1"
            values={phaseOutput.dValues}
          />
        </path>

        // <path>
        //   <animate
        //     calcMode="spline"
        //     keyTimes={tsone.keyTimes}
        //     keySplines={tsone.keySplines}
        //     attributeName="d"
        //     dur="1000ms"
        //     repeatCount="indefinite"
        //     values={animation.dValues}
        //   />
        // </path>
        // <path d={one.d} fill="red" />
      }
    </svg>
  );
}

export default Blob;

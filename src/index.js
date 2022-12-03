import Knight from "./knight.js";
import _ from "lodash";

const k = new Knight();

// k.makeGraph();
// console.log("map: ", k.map, "\n", "graph: ", k.graph);

k.bestPath([0, 0], [6, 7]);

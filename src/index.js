console.log("Hello!");

import "./styles/main.css";
import { load } from "./scripts/load.js";
import { board } from "./scripts/boardBack.js";
import { loadWindow } from "./scripts/startWindows/startWindows.js";

const elBody = document.body;
const elLoad = load();
const elBoard = board();
const elLoadWindow = loadWindow();

window.addEventListener('load', () => {
  elLoad.replaceWith(elBoard, elLoadWindow);
});


elBody.append(elLoad);

/*
const startLoaded = ()=>{
 const elLoaded =  document.createElement('div');
return elLoaded;

}; */

console.log();



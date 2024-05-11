console.log("Hello!");

import "./styles/main.css";
import { load } from "./scripts/load.js";
import { board } from "./scripts/boardBack.js";


const elBody = document.body;
const elLoad = load();
const elBoard = board();

window.addEventListener('load', () => {
  elLoad.replaceWith(tempLoaded);
});


elBody.append(elLoad);


const tempLoaded = (()=>{
 const loaded =  document.createElement('div');
 loaded.innerText = "loaded";
return loaded;

})();

console.log(tempLoaded);
tempLoaded.append(elBoard);


console.log("Hello!");

import "./styles/main.css";
import { load } from "./scripts/load.js";


const elBody = document.body;
const elLoad = load();

window.addEventListener('load', () => {
  elLoad.replaceWith(tempLoaded);
});


elBody.append(elLoad);


const tempLoaded = (()=>{

return document.createElement('div').innerText = "loaded";

})();




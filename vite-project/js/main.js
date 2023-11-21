import "../css/style.css"
import {category} from './cuisine'
import { DOMSelectors } from "./dom";
/* import {cuisine, price} from "./cuisine";
console.log(cuisine, price) */

function card (){
    category.forEach((object) => {const poop = 
    `<div id="container">
    <div id="card">
        <h3 class = "name">${object.name}</h3>
        <img src="${object.pic}" class="cardimg">
        <h4 class = ${object.money}>Price</h4> 
    </div>  
</div>`

DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    poop
    
)})};
card()



/* 
const printchinese = category.filter((category)=>category.cuisine ==="chinese").forEach((category)=> console.log(category.name)); 

const printjapanese = category.filter((category)=>category.cuisine ==="japanese").forEach((category)=> console.log(category.name)); 

const printmexican = category.filter((category)=>category.cuisine ==="mexican").forEach((category)=> console.log(category.name)); 

const printindian = category.filter((category)=>category.cuisine ==="indian").forEach((category)=> console.log(category.name)); 

const printitalian = category.filter((category)=>category.cuisine ==="italian").forEach((category)=> console.log(category.name)); 
 */
import "../css/style.css"
import {categories} from './cuisine'
import { DOMSelectors } from "./dom";
/* import {cuisine, price} from "./cuisine";
console.log(cuisine, price) */

function poopy (){
    categories.forEach((x) => {const poop = 
    `<div class="container">
    <div class="card">
        <h3 class = "name">${x.name}</h3>
        <img src="${x.pic}" class="cardimg">
        <h4 class = ${x.money}>Price</h4> 
    </div>  
</div>`
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    poop
    
)})};
poopy()

DOMSelectors.button.addEventListener("click", function(event){
    event.preventDefault();
    function clearfields(){
        document.container.innerHTML="";
    }
    clearfields()
    const printchinese = categories.filter((category) => category.cuisine === "chinese").forEach((category)=> 
    {const poop = 
        `<div class="container">
        <div class="card">
            <h3 class = "name">${category.name}</h3>
            <img src="${category.pic}" class="cardimg">
            <h4 class = ${category.money}>Price</h4> 
        </div>  
    </div>`
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        poop,
        printchinese
        )})});
        
    


// DOMSelectors.button.addEventListener("click", () => {
//     const printchinese = categories.filter((category) => category.cuisine === "chinese").forEach((category));
// });

// function divCreator(){
//     DOMSelectors.container.insertAdjacentHTML(
//         "afterbegin",
        
//         function insert(){
//             categories.forEach((category) => {const poop = 
//                 `<div id="container">
//                     <h3 class = "name">${category.name}</h3>
//                     <img src="${category.pic}" class="cardimg">
//                     <h4 class = ${category.money}>Price</h4>  
//             </div>`
//         })},
//         insert()
//     )}
//     divCreator()



/* 
const printchinese = category.filter((category)=>category.cuisine ==="chinese").forEach((category)=> console.log(category.name)); 

const printjapanese = category.filter((category)=>category.cuisine ==="japanese").forEach((category)=> console.log(category.name)); 

const printmexican = category.filter((category)=>category.cuisine ==="mexican").forEach((category)=> console.log(category.name)); 

const printindian = category.filter((category)=>category.cuisine ==="indian").forEach((category)=> console.log(category.name)); 

const printitalian = category.filter((category)=>category.cuisine ==="italian").forEach((category)=> console.log(category.name)); 
 */
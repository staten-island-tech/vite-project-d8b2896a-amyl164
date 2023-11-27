import "../css/style.css"
import {categories} from './cuisine'
import { DOMSelectors } from "./dom";
/* import {cuisine, price} from "./cuisine";
console.log(cuisine, price) */
function clearfields(){
    DOMSelectors.container.innerHTML="";
}
function insertCards(arr){
    //arr represents an array such as cuisine/menu items
    arr.forEach((x) => {
DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h3 class = "name">${x.name}</h3>
        <img src="${x.pic}" class="cardimg">
        <h4 class = ${x.money}>Price</h4> 
    </div> `
    
)})};
//set up initial menu on screen
insertCards(categories)
/* 
DOMSelectors.china.addEventListener("click", function(event){
clearfields()
const printchinese = categories.filter((category) => category.cuisine === "chinese");
poopy(printchinese)
});

DOMSelectors.japan.addEventListener("click", function(event){
    event.preventDefault();
    function clearfields(){
        DOMSelectors.container.innerHTML="";
    }
    clearfields()
    function pee(){
        const printjapanese = categories.filter((category) => category.cuisine === "japanese");
        printjapanese.forEach((category)=> 
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
        
    )})}
    pee()
});

DOMSelectors.mexico.addEventListener("click", function(event){
    event.preventDefault();
    function clearfields(){
        DOMSelectors.container.innerHTML="";
    }
    clearfields()
    function pee(){
        const printmexican = categories.filter((category) => category.cuisine === "mexican");
        printmexican.forEach((category)=> 
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
        
    )})}
    pee()
});

DOMSelectors.india.addEventListener("click", function(event){
    event.preventDefault();
    function clearfields(){
        DOMSelectors.container.innerHTML="";
    }
    clearfields()
    function pee(){
        const printindian = categories.filter((category) => category.cuisine === "indian");
        printindian.forEach((category)=> 
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
        
    )})}
    pee()
});

DOMSelectors.italy.addEventListener("click", function(event){
    event.preventDefault();
    function clearfields(){
        DOMSelectors.container.innerHTML="";
    }
    clearfields()
    function pee(){
        const printitalian = categories.filter((category) => category.cuisine === "italian");
        printitalian.forEach((category)=> 
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
        
    )})}
    pee()
}); */

//combine all buttons into one Nodelist/Array
let buttons = document.querySelectorAll('button')

// for each button we add anevent listener
buttons.forEach((btn)=> btn.addEventListener("click", function(){
    //get value/text content of button to be compared later
    let type = btn.textContent.toLowerCase()
    //filter the main array by the type of cuisine
    let newArr = categories.filter((category) => category.cuisine === type)
    clearfields()
    //pass filtered array into insertcards to put on screen
   insertCards(newArr)
}))

document.querySelector(".btn1").addEventListener("click", function () {
    document.body.classList.add("btn1");
})
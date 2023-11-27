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

DOMSelectors.china.addEventListener("click", function(event){
    event.preventDefault();
    function clearfields(){
        DOMSelectors.container.innerHTML="";
    }
    clearfields()
    function pee(){
        const printchinese = categories.filter((category) => category.cuisine === "chinese");
        printchinese.forEach((category)=> 
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
});

    
    

        
  
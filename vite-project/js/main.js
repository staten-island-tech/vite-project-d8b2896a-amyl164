import "../css/style.css"
import {category} from './cuisine'
/* import {cuisine, price} from "./cuisine";
console.log(cuisine, price) */


const printchinese = category.filter((category)=>category.cuisine ==="chinese").forEach((category)=> console.log(category.name)); 

const printjapanese = category.filter((category)=>category.cuisine ==="japanese").forEach((category)=> console.log(category.cuisine)); 

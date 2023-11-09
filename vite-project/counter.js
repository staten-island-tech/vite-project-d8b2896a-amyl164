export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

const cuisine = [
  {
    name: "Cantonese Char Siu",
    price: "$",
    cuisine: "chinese",
  },
]

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button)=> {
    button.addEventListener("click",function(event){
        const cuisine = 
    });
});
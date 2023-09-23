import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

function Teste(){
  console.log("aqui")
}

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  console.log(counter);
}

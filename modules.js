 
function sayHi() {
  console.log("hello123")
}

function plusFive(x) {
  console.log(x + 5)
}

function changeToFunkyColor (domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;


  // const r = Math.floor(Math.random() * 200) + 55;
  // const g = Math.floor(Math.random() * 200) + 55;
  // const b = Math.floor(Math.random() * 200) + 55; 
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
//module.exports.changeToFunkyColor = changeToFunkyColor

export { sayHi, plusFive, changeToFunkyColor }






const btn=document.getElementById('btn');
const h1=document.querySelector('h1');
const div=document.querySelector('div');

const getRandomColor=()=>{

let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);

let color=`rgb(${red},${green},${blue})`;

return color;

}


btn.addEventListener('click',()=>{
  let randomColor= getRandomColor()

  h1.innerText=randomColor;
  div.style.backgroundColor=randomColor;

})
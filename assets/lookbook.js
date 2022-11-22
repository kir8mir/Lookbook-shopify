const showProduct = (id) => {
  const element = document.getElementById(id);
  element.classList.remove('disable-look');
  document.getElementById('lookbook-selector').classList.add('disable-look');
}

const closeProduct = (id) => {
  const element = document.getElementById(id);
  element.classList.add('disable-look');
  document.getElementById('lookbook-selector').classList.remove('disable-look');
}




  document.getElementById('p-1').addEventListener("mouseover", (event) => {
   document.getElementById('p-2').classList.add('show-glitch');

})

document.getElementById('p-1').addEventListener("mouseout", (event) => {
   document.getElementById('p-2').classList.remove('show-glitch');

})

  document.getElementById('g-1').addEventListener("mouseover", (event) => {
   document.getElementById('g-2').classList.add('show-glitch');

})

document.getElementById('g-1').addEventListener("mouseout", (event) => {
   document.getElementById('g-2').classList.remove('show-glitch');

})

  document.getElementById('d-1').addEventListener("mouseover", (event) => {
   document.getElementById('d-2').classList.add('show-glitch');

})

document.getElementById('d-1').addEventListener("mouseout", (event) => {
   document.getElementById('d-2').classList.remove('show-glitch');

})



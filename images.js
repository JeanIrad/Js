const images = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const spans = document.querySelectorAll('span')
let index = 0;

function incrementIndex() {
  index++;
  if (index >= images.length) index = 0;
//   console.log(index, images.length);
  return index;
}
nextBtn.onclick = () => {
  let ind = incrementIndex();
  show(ind);
};
function decrementIndex() {
  if (index === 0) index = images.length - 1;
  index--;
  return index;
}
prevBtn.onclick = () => {
  let ind = decrementIndex();
  show(ind);
};

function show(i) {
  images.forEach((image) => (image.style.display = "none"));
  spans.forEach(element => {
    element.style.display = 'none'
  });
  images[i].style.display = "block";
  spans[i].style.display = 'block'
  spans[i].classList.add('spin')
  spans[i].textContent = spans[i].dataset.img
}
// using setTimout to slide Images -----  auto slider  ------



window.onload = ()=>{
 const timerId = setInterval(()=>{
    let i = incrementIndex()
    show(i)
    }, 3000)
    if (i === 5){
      clearInterval(timerId)
      alert('hello')
    }
}
const imagetext = document.querySelector('#image-text')

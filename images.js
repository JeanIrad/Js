const images = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
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
  images[i].style.display = "block";
}
// using setTimout to slide Images -----  auto slider  ------

// setTimeout(()=>{
// let i = incrementIndex()
// show(i)
// }, 1000)


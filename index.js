const slider = document.querySelector(`.slider`);
let itemsArray = document.querySelectorAll('.slider__item');
let items = Array.from(itemsArray);
const totalItems = Object.keys(items).length;

const prev = document.querySelector(`.prevbtn`);
const next = document.querySelector(`.nextbtn`); 

let currentIndex = 0;
let prevIndex;

const itemWidth = items[0].clientWidth + 30;
slider.style.transform = `translateX(-${itemWidth}px)`;



// ! NEXT

next.addEventListener("click", () => {
  slider.classList.add("sliding-transition");

  prevIndex = currentIndex;
  currentIndex = (currentIndex + 1) % totalItems;

  slider.style.transform = `translateX(-${itemWidth * 2}px)`;
  
  setTimeout(() => {
    slider.appendChild(items[prevIndex]);
    slider.classList.remove("sliding-transition");
    slider.style.transform = `translateX(-${itemWidth}px)`;
    // sliderShift();
    // [...items].pop();
  }, 500);
}); 


// !PREV

prev.addEventListener("click", () => {
  prevIndex = currentIndex;
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;

  // Move Carousel to the left by one image, and insert the image at currentIndex at the beginning of carousel's DOM
  slider.style.transform = `translateX(-${itemWidth * 2}px)`;
  slider.insertBefore(items[currentIndex], slider.firstChild);

  // Now, let's start the transition effect, from -520 px to 0 px.
  setTimeout(() => {
    slider.style.transform = `translateX(-${itemWidth}px)`;
    slider.classList.add("sliding-transition");
  }, 10);

  setTimeout(() => {
    // By removing the transition class, we ensure that the transition only occurs when we want it to and that we have full control over the carousel's movement.
    slider.classList.remove("sliding-transition");
  }, 490);
});   
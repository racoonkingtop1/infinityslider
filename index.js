// document.addEventListener("DOMContentLoaded", function() {
//     // Получаем все слайды и кнопки
//     const slider = document.querySelector(".slider");
//     const slides = Array.from(document.querySelectorAll(".slider__item"));
//     const prevBtn = document.querySelector(".prevbtn");
//     const nextBtn = document.querySelector(".nextbtn");
//     const slideWidth = slides[0].clientWidth;
  
//     let currentIndex = 0;
  
//     // Функция для переключения слайдов влево
//     function slideLeft() {
//       if (currentIndex > 0) {
//         currentIndex--;
//         slider.style.transform = `translateX(${(-slideWidth - 15) * currentIndex}px)`;
//       } else {
//         currentIndex = slides.length - 1;
//         slider.style.transform = `translateX(${(-slideWidth - 15) * currentIndex}px)`;
//       }
//     }
  
//     // Функция для переключения слайдов вправо
//     function slideRight() {
//       if (currentIndex < slides.length - 1) {
//         currentIndex++;
//         slider.style.transform = `translateX(${(-slideWidth - 30) * currentIndex}px)`;
//       } else {
//         currentIndex = 0;
//         slider.style.transform = `translateX(${(-slideWidth - 30) * currentIndex}px)`;
//       }
//     }
  
//     // Обработчики событий для кнопок
//     prevBtn.addEventListener("click", slideLeft);
//     nextBtn.addEventListener("click", slideRight);
//   });





const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider__item');
const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');
let currentIndex = 0;
const sliderWidth = slider.offsetWidth;
const itemWidth = sliderItems[0].offsetWidth;
const itemsPerSlide = Math.floor(sliderWidth / (itemWidth + 15)); // Учтем "довод" слайда

function moveToIndex(index) {
    currentIndex = index;
    const offset = -(currentIndex * (itemWidth + 15) % ((sliderItems.length - itemsPerSlide + 1) * (itemWidth + 15)));
    slider.style.transform = `translateX(${offset}px)`;
  }
  
  function nextSlide() {
    if (currentIndex < sliderItems.length - itemsPerSlide) {
      moveToIndex(currentIndex + 1);
    } else {
      moveToIndex(0);
    }
  }
  
  function prevSlide() {
    if (currentIndex > 0) {
      moveToIndex(currentIndex - 1);
    } else {
      moveToIndex(sliderItems.length - itemsPerSlide);
    }
  }
  
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);







//   const slider = document.querySelector('.slider');
// const sliderItems = document.querySelectorAll('.slider__item');
// const prevBtn = document.querySelector('.prevbtn');
// const nextBtn = document.querySelector('.nextbtn');
// let currentIndex = 0;
// const sliderWidth = slider.offsetWidth;
// const itemWidth = sliderItems[0].offsetWidth;
// const itemsPerSlide = Math.floor(sliderWidth / (itemWidth + 15)); // Учтем "довод" слайда

// // Скопировать первый слайд и вставить его в конец
// slider.appendChild(sliderItems[0].cloneNode(true));

// function moveToIndex(index) {
//   currentIndex = index;
//   const offset = -currentIndex * (itemWidth + 15);
//   slider.style.transform = `translateX(${offset}px)`;
// }

// function nextSlide() {
//   if (currentIndex < sliderItems.length - itemsPerSlide) {
//     moveToIndex(currentIndex + 1);
//   } else {
//     currentIndex = 0;
//     slider.style.transition = 'none';
//     const offset = -currentIndex * (itemWidth + 15);
//     slider.style.transform = `translateX(${offset}px`;
//     setTimeout(() => {
//       slider.style.transition = 'transform 0.5s ease-in-out';
//       moveToIndex(currentIndex + 1);
//     }, 100);
//   }
// }

// function prevSlide() {
//   if (currentIndex > 0) {
//     moveToIndex(currentIndex - 1);
//   } else {
//     currentIndex = sliderItems.length - itemsPerSlide;
//     const offset = -currentIndex * (itemWidth + 15);
//     slider.style.transform = `translateX(${offset}px)`;
//   }
// }

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);
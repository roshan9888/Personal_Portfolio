console.log("portfolio opened");

const hamburger = document.querySelector(".hamburger");
const menuSlider = document.querySelector(".menu-slider");
const overlay = document.querySelector(".overlay");
let slider = false;
console.log(slider);

//function to toggle slider when click on hamburger button
hamburger.addEventListener("click", () => {
  console.log("clicked on hamburger");
  menuSlider.classList.toggle("active");
  overlay.classList.toggle("active");
  if (slider === false) {
    slider = true;
    hamburger.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else if (slider === true) {
    slider = false;
    hamburger.innerHTML = ` <i class="fa-solid fa-bars"></i>`;
  }
  console.log(slider);
});

// close slider when click on overlay
overlay.addEventListener("click", () => {
  console.log("clicked on overlay");
  menuSlider.classList.remove("active");
  overlay.classList.remove("active");
  if (slider === false) {
    slider = true;
    hamburger.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else if (slider === true) {
    slider = false;
    hamburger.innerHTML = ` <i class="fa-solid fa-bars"></i>`;
  }
});

// function to remove overlay when click on hyperlinks in navbar
const navHyperlink = document.querySelectorAll(".nav-hyperlink a");
navHyperlink.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("link clicked");
    menuSlider.classList.remove("active");
    overlay.classList.remove("active");
    if (slider === false) {
      slider = true;
      hamburger.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else if (slider === true) {
      slider = false;
      hamburger.innerHTML = ` <i class="fa-solid fa-bars"></i>`;
    }
  });
});

// JavaScript to toggle dark mode
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

// Example: You can call toggleDarkMode() when clicking a button or performing any other action to toggle the dark mode.
const darkModeButton = document.querySelector(".dark-mode-button");

darkModeButton.addEventListener("click", () => {
  toggleDarkMode();
});


// submit contact form => for future
// const form = document.querySelector(".form");

// document.addEventListener("DOMContentLoaded", function () {
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Create a FormData object from the form
//     const formData = new FormData(form);

//     // Convert the FormData object to a plain JavaScript object
//     const formObject = {};
//     formData.forEach((value, key) => {
//       formObject[key] = value;
//     });
//     // Log the form data to the console
//     console.log(formObject);
//   });
// });

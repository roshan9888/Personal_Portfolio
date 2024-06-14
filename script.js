console.log("portfolio opened");

const hamburger = document.querySelector(".hamburger");
const menuSlider = document.querySelector(".menu-slider");
const overlay = document.querySelector(".overlay");
<<<<<<< HEAD
=======

>>>>>>> abc662d (contact us from changes)
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


<<<<<<< HEAD
// submit contact form => for future
=======
// // submit contact form => for future
>>>>>>> abc662d (contact us from changes)
// const form = document.querySelector(".form");

// document.addEventListener("DOMContentLoaded", function () {
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Create a FormData object from the form
//     const formData = new FormData(form);

//     // Convert the FormData object to a plain JavaScript object
<<<<<<< HEAD
//     const formObject = {};
//     formData.forEach((value, key) => {
//       formObject[key] = value;
//     });
//     // Log the form data to the console
//     console.log(formObject);
//   });
// });
=======
//     // const formObject = {};
//     // formData.forEach((value, key) => {
//     //   formObject[key] = value;
//     // });

//     // Log the form data to the console
//     // console.log(formObject);

//     // Send the form data to the server
//     fetch("send-email.php", {
//       method: 'POST',
//       // headers: {
//       //   'Content-Type': 'application/json',
//       // },
//       // body: JSON.stringify(formObject),
//       body: formData,
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Form data sent successfully:', data);
//       // Optionally, you can redirect the user to a thank you page
//       // window.location.href = '/thank-you.html';
//     })
//     .catch(error => {
//       console.error('Error sending form data:', error);
//       // Handle errors as needed
//     });
//   });
// });

// Initialize EmailJS with your user ID
(function() {
  emailjs.init("h4Q_xoQOrKT5XwI_Q");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect the form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    // Send the email using EmailJS
    emailjs.send("service_v0fwsqr", "template_ialm1a3", data)
      .then(response => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
      })
      .catch(error => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
  });
});
>>>>>>> abc662d (contact us from changes)

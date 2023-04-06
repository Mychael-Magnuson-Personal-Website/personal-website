/* We can add some very basic JS programming here but it does not need to be
anything crazy since where we are in the course, we have not learned much of any JS. 
To make the project just a little more fun and challenging lets attempt to create a 
sticky header*/

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position.
// Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Making the mobile button navigation work
const buttonNavigationElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

buttonNavigationElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});

// Adding code for a functional form
const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit");

// scriptURL from Block 12 Assignment
// const scriptURL =
//   "https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec";

// scriptURL from personal Google sheets created
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzdAzzkqsEINF5RtBSpYwZJCmjlChr06grOUl0qvJSFTwUoOJO1USMMkjdw2bjC76G9/exec";

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Success!", response);
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
      submitButton.disabled = false;
    });
});

// Web App URL
// https://script.google.com/macros/s/AKfycbzdAzzkqsEINF5RtBSpYwZJCmjlChr06grOUl0qvJSFTwUoOJO1USMMkjdw2bjC76G9/exec
// View the Google Sheets Spreadsheet
// https://docs.google.com/spreadsheets/d/19QwjONIaelgJ0uRBAMYxEfd-VjTkJGpDKoiYfPvmIC4/edit#gid=0

// Resetting inputs so that they are clear whenever the user presses submit on the form
document.querySelector("form").onsubmit = (e) => {
  e.target.reset();
  return false;
};

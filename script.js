// Making the mobile button navigation work
const buttonNavigationElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

buttonNavigationElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
  document.body.classList.toggle("no-scroll");
});

/////////////////////////////////////////////////////////////////////////////////

// Adding code for a functional form
const form = document.querySelector(".form");
const submitButton = document.querySelector(".submit");

// scriptURL from Block 12 Assignment
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec";

// scriptURL from personal Google sheets created
// const scriptURL =
// "https://script.google.com/macros/s/AKfycbzdAzzkqsEINF5RtBSpYwZJCmjlChr06grOUl0qvJSFTwUoOJO1USMMkjdw2bjC76G9/exec";

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

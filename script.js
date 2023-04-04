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

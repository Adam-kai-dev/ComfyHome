// <-------------- Start Navbar ---------------->

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

// Target Menu
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// <-------------- End Navbar ---------------->

// Show bg of navbar when Scroll
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 200) {
    document.getElementById("navContainer").style.background = "crimson";
    //  document.getElementById("navbar-logo").style.color = 'yellow';
  } else {
    document.getElementById("navContainer").style.background = "none";
    //  document.getElementById("navbar-logo").style.color = 'white';
  }
};

// ppp
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
// ppp

// Start Slider Price
var slider = document.getElementById("myRange");
var output = document.getElementById("price");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

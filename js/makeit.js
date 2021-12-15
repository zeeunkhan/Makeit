"use strict";

var total = [];

const $ = (selector) => document.querySelector(selector);

const collection = document.querySelectorAll("ul img");

// adding hover-over effect to images
for (var i = 0; i < collection.length; i++) {
  const image = collection[i];
  const previousUrl = image.src;
  const currentUrl = image.id;

  const newImage = new Image();
  newImage.src = currentUrl;

  image.addEventListener("mouseover", () => {
    image.src = newImage.src;
  });
  image.addEventListener("mouseout", () => {
    image.src = previousUrl;
  });
}

//function to display message after sumitting form (contact page)
function myFunction() {
  document.getElementById("submit").innerHTML = "Submitted. Thank You!";
}

//function for menu button toggles
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

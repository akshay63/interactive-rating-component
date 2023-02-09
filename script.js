/**
 * Concepts Used: EVENT DELEGATION, object element in HTML
 * */

var ratings = document.querySelector(".ratings");
var num = [...ratings.querySelectorAll(`a`)];
var rating = document.querySelector(".rating");
var ratingFeedback = document.querySelector(".rating-feedback");
var currRating = document.querySelector(".current-rating");
var overallRating = document.querySelector(".overall-rating");
var submitBtn = document.querySelector(".submitBtn");
overallRating.textContent = num.length; //setting overall rating

let selectedLink;
ratings.addEventListener("click", function (event) {
  let link = event.target.closest("a");
  if (!link) return;
  if (!ratings.contains(link)) return;
  currRating.textContent = link.textContent;
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    rating.classList.add("hidden");
    ratingFeedback.classList.remove("hidden");
  });
  highlight(link);
});

function highlight($link) {
  if (selectedLink) {
    selectedLink.classList.remove("selected");
  }
  selectedLink = $link;
  selectedLink.classList.add("selected");
}

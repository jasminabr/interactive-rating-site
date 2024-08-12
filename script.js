const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit-btn");
const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const selectedRating = document.getElementById("selected-rating");

let rating = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    rating = button.value;
  });
});

submitBtn.addEventListener("click", () => {
  if (rating !== 0) {
    selectedRating.textContent = rating;
    ratingState.style.display = "none";
    thankYouState.style.display = "block";
  } else {
    alert("Please select a rating before submitting!");
  }
});

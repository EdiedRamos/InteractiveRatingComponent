// get reference to star options
const starOptions = document.querySelector(".stars-container").children;

// submit button
const submitButton = document.getElementById("submit");

// save the last star selected
let before = -1;

// add active class and remove the last added
for (let i = 0; i < starOptions.length; i++) {
  starOptions[i].addEventListener("click", () => {
    if (~before) {
      starOptions[before].classList.remove("active");
    }
    starOptions[i].classList.add("active");
    before = i;
  });
}

// show the result container and stars selected
submitButton.addEventListener("click", () => {
  if (~before) {
    // make the first container hidden
    document.getElementById("first-container").classList.add("hide");
    // make the second container visible
    document.getElementById("second-container").classList.remove("hide");
    // put stars selected on the second container paragraph
    document.getElementById(
      "stars-selected"
    ).children[0].innerText = `You selected ${before + 1} out of 5`;
  } else {
    alert("choose an option");
  }
});

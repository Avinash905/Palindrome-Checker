let input = document.querySelector("input");
let button = document.querySelector(".btn");
let valid;
let show = document.querySelector("#show");

function reverse(str) {
  return str.split("").reverse().join("");
}

input.addEventListener("keyup", () => {
  valid = input.value.toLowerCase().replace(/[^a-zA-Z0-9]/gi, "");
  console.log(valid);
  if (valid != "") {
    return button.classList.add("active");
  }
  button.classList.remove("active");
});

button.addEventListener("click", () => {
  if (reverse(valid) === valid) {
    show.innerHTML = `Yes, <span>${valid}</span> is a palindrome!`;
  } else {
    show.innerHTML = `No, <span>${valid}</span> is not a palindrome!`;
  }
});

const wordInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const wordResult = document.getElementById("word-result");

const isItPalindrome = () => {
  const input = wordInput.value;
  const cleanInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reverseInput = cleanInput.split("").reverse().join("");
  if (!input) {
    alert("Please input a value");
  } else if (cleanInput === reverseInput) {
    wordResult.style.display = "block";
    wordResult.innerText = `${input} is a palindrome`;
  } else {
    wordResult.style.display = "block";
    wordResult.innerText = `${input} is not a palindrome`;
  }
};

checkBtn.addEventListener("click", isItPalindrome);

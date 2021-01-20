const promptParagraph = document.querySelector("#prompt-paragraph");
const dateButton = document.querySelector("#date-button");
const nameButton = document.querySelector("#name-button");

function nameButtonHandler() {
  const name = prompt("Hello! Please enter your name here!", "Unknown Name");
  promptParagraph.textContent = `Hello Banker, ${name}, to my Monster Hotel Bank Proposal!`;
}

function dateHandler() {
  let date = new Date();
  dateButton.textContent = date;
}

nameButton.addEventListener("click", nameButtonHandler);
dateButton.addEventListener("click", dateHandler);

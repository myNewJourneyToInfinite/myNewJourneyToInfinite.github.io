const notes = document.querySelector(".notes")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");
const userInput = document.getElementById("userInput");

// Pencil Icon to clear the notes
pencil.addEventListener("click", function () {
  allItems.innerHTML = "";
});

// Enter key reaction
userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addItem();
});

// Add Item function to work when Enter is pressed
const addItem = function () {
  let h2 = document.createElement("h2");
  h2.innerHTML = "- " + userInput.value;

  // event listener when you click on a note it draw a line on it
  h2.addEventListener("click", function () {
    h2.style.textDecoration = "line-through";
  });

  // adding h2 element to all item container
  allItems.insertAdjacentElement("beforeend", h2);

  // to clear the input when its gets enterd
  userInput.value = "";
};

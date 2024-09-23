function alertName() {
  const nameInput = document.getElementById("name").value;
  if (nameInput) {
      alert("Hi " + nameInput + "!");
  }
}

let isBlue = true;
function changeColor() {
  if (isBlue) {
      document.body.style.backgroundColor = "green";
  } else {
      document.body.style.backgroundColor = "lightblue";
  }
  isBlue = !isBlue;
}

function validateText() {
  const textInput = document.getElementById("textInput").value;
  const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (validation.test(textInput)) {
      alert("Special characters are not allowed!");
  } else {
      alert("Text is valid!");
  }
}

function addText() {
  const heading = document.getElementById("heading");
  heading.textContent += " Add Text";
}


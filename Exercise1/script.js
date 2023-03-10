function ChangeName() {
    let text;
  let person = prompt("What your name?", "Enter your name");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "!";
  }
  document.getElementById("inputName").innerHTML = text;
}

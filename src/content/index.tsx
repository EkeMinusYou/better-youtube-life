const body = document.querySelector("body");
const addElement = document.createElement("h1");
addElement.textContent = "Hello!!";
body!.prepend(addElement);

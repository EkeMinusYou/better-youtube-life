import "./index.css";

document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    const videos = document.querySelectorAll("ytd-thumbnail");
    videos[1].classList.toggle("highlighted");
  }
});

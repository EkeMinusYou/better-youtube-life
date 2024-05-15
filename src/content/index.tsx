import "./index.css";

document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    let videos = document.querySelectorAll("ytd-thumbnail");
    videos.forEach(function (video) {
      video.classList.toggle("highlighted");
    });
  }
});

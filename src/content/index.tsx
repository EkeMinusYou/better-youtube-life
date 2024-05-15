import "./index.css";

const classes = {
  highlighted: "sfc-highlighted",
};

document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    const videos = document.querySelectorAll("ytd-thumbnail");
    videos[1].classList.toggle(classes.highlighted);
  }
});

import { css } from "@emotion/css";

const style = css({
  border: "4px solid red",
  boxSizing: "border-box",
});

document.addEventListener("keydown", function (event) {
  if (event.key === "k") {
    const videos = document.querySelectorAll("ytd-thumbnail");
    videos[1].classList.add(style);
  }
  if (event.key === "j") {
    const videos = document.querySelectorAll("ytd-thumbnail");
    videos[1].classList.remove(style);
  }
});

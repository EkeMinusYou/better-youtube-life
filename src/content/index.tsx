import { css } from "@emotion/css";

const style = css({
  border: "4px solid red",
  boxSizing: "border-box",
});

document.addEventListener("keydown", function (event) {
  // 0は初期値として扱う。0はどの動画も示さない。
  let current: number = 0;

  if (event.key === "h") {
    const videos = document.querySelectorAll("ytd-thumbnail");

    if (current === 0) {
      current = 1;
    } else {
      videos[current].classList.remove(style);
      current--;
    }
    videos[current].classList.add(style);
  }

  if (event.key === "j") {
    const videos = document.querySelectorAll("ytd-thumbnail");
    if (current === 0) {
      current = 1;
    } else {
      videos[current].classList.remove(style);
      // TODO: implement
    }
    videos[current].classList.add(style);
  }

  if (event.key === "k") {
    const videos = document.querySelectorAll("ytd-thumbnail");
    if (current === 0) {
      current = 1;
    } else {
      videos[current].classList.remove(style);
      // TODO: implement
    }
    videos[current].classList.add(style);
  }

  if (event.key === "l") {
    const videos = document.querySelectorAll("ytd-thumbnail");
    if (current === 0) {
      current = 1;
    } else {
      videos[current].classList.remove(style);
      current++;
    }
    videos[current].classList.add(style);
  }
});

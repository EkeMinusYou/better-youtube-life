import { keymaps } from "./keymaps";
import { styles } from "./styles";

let current = 0;

document.addEventListener("keydown", function (event) {
  // 0はどの動画も示さない。
  switch (event.key) {
    case keymaps.Left:
      handleKeyLeft();
      break;
    // case keymaps.Down:
    //   handleKeyDown();
    //   break;
    // case keymaps.Up:
    //   handlekeyUp();
    //   break;
    case keymaps.Right:
      handleKeyRight();
      break;
  }
});

const handleKeyLeft = () => {
  const videos = document.querySelectorAll("ytd-thumbnail");

  if (current === 0) {
    current = 1;
  } else {
    videos[current].classList.remove(styles.highlight);
    current--;
  }
  videos[current].classList.add(styles.highlight);
};

// const handleKeyDown = () => {
//   let current = 0;
//
//   const videos = document.querySelectorAll("ytd-thumbnail");
//   if (current === 0) {
//     current = 1;
//   } else {
//     videos[current].classList.remove(styles.highlight);
//     // TODO: implement
//   }
//   videos[current].classList.add(styles.highlight);
// };
//
// const handlekeyUp = () => {
//   let current = 0;
//
//   const videos = document.querySelectorAll("ytd-thumbnail");
//   if (current === 0) {
//     current = 1;
//   } else {
//     videos[current].classList.remove(styles.highlight);
//     // TODO: implement
//   }
//   videos[current].classList.add(styles.highlight);
// };

const handleKeyRight = () => {
  const videos = document.querySelectorAll("ytd-thumbnail");

  if (current === 0) {
    current = 1;
  } else {
    videos[current].classList.remove(styles.highlight);
    current++;
  }
  videos[current].classList.add(styles.highlight);
};

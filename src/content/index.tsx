import { keymaps } from "./keymaps";
import { styles } from "./styles";

// undefinedは未選択。いずれかのkeyが押されたら0になる
let current: number | undefined = undefined;

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
  const videos = document.querySelectorAll("ytd-rich-item-renderer");
  if (current === undefined) {
    current = 0;
    videos[current].classList.add(styles.highlight);
    return;
  }

  if (current === 0) {
    return;
  }

  videos[current].classList.remove(styles.highlight);
  current--;
  videos[current].classList.add(styles.highlight);
};

// const handleKeyDown = () => {
//   let current = 0;
//
//   const videos = document.querySelectorAll("ytd-rich-item-renderer");
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
//   const videos = document.querySelectorAll("ytd-rich-item-renderer");
//   if (current === 0) {
//     current = 1;
//   } else {
//     videos[current].classList.remove(styles.highlight);
//     // TODO: implement
//   }
//   videos[current].classList.add(styles.highlight);
// };

const handleKeyRight = () => {
  const videos = document.querySelectorAll("ytd-rich-item-renderer");
  if (current === undefined) {
    current = 0;
    videos[current].classList.add(styles.highlight);
    return;
  }

  videos[current].classList.remove(styles.highlight);
  current++;
  videos[current].classList.add(styles.highlight);
};

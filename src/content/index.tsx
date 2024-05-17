import { GridVideos } from "./grid-videos";
import { keymaps } from "./keymaps";

const videos = new GridVideos();

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case keymaps.Left:
      handleKeyLeft(videos);
      break;
    // case keymaps.Down:
    //   handleKeyDown();
    //   break;
    // case keymaps.Up:
    //   handlekeyUp();
    //   break;
    case keymaps.Right:
      handleKeyRight(videos);
      break;
  }
});

const handleKeyLeft = (videos: GridVideos) => {
  if (!videos.highlighted()) {
    videos.highlightFirst();
    return;
  }
  videos.highlightPrevious();
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

const handleKeyRight = (videos: GridVideos) => {
  if (!videos.highlighted()) {
    videos.highlightFirst();
    return;
  }
  videos.highlightNext();
};

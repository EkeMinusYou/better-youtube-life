import { GridVideos } from "./grid-videos";
import { keymaps } from "./keymaps";

const main = () => {
  const videos = new GridVideos();

  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case keymaps.Left:
        handleKeyLeft(videos);
        break;
      case keymaps.Down:
        handleKeyDown(videos);
        break;
      case keymaps.Up:
        handlekeyUp(videos);
        break;
      case keymaps.Right:
        handleKeyRight(videos);
        break;
    }
  });
};

main();

const handleKeyLeft = (videos: GridVideos) => {
  if (!videos.highlighted()) {
    videos.highlightFirst();
    return;
  }
  videos.highlightPrevious();
};

const handleKeyDown = (videos: GridVideos) => {
  if (!videos.highlighted()) {
    videos.highlightFirst();
    return;
  }

  videos.highlightDown();
};

const handlekeyUp = (videos: GridVideos) => {
  if (!videos.highlighted()) {
    videos.highlightFirst();
    return;
  }

  videos.highlightUp();
};

const handleKeyRight = (videos: GridVideos) => {
  if (!videos.highlighted()) {
    videos.highlightFirst();
    return;
  }
  videos.highlightNext();
};

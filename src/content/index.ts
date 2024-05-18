import { GridVideos } from "./grid-videos";
import { moving, movingKeys } from "./keymaps";

const main = () => {
  const videos = new GridVideos();

  document.addEventListener("keydown", function (event) {
    const path = window.location.pathname;

    // なにもハイライトされていないときに移動キーが押されたら最初の要素をハイライトする
    if (path === "/") {
      if (movingKeys.includes(event.key) && !videos.highlighted()) {
        videos.highlightFirst();
        return;
      }
      switch (event.key) {
        case moving.Left:
          videos.highlightPrevious();
          break;
        case moving.Down:
          videos.highlightDown();
          break;
        case moving.Up:
          videos.highlightUp();
          break;
        case moving.Right:
          videos.highlightNext();
          break;
      }
    }
  });
};

main();

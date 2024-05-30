import { GridVideos } from "./grid-videos";
import { modifierKeyDown, moving, movingKeys } from "./keymaps";

const main = () => {
  const videos = new GridVideos();

  document.addEventListener("keydown", function (event) {
    const path = window.location.pathname;

    // なにもハイライトされていないときに移動キーが押されたら最初の要素をハイライトする
    if (path === "/") {
      if (!modifierKeyDown(event)) return false;
      if (movingKeys.includes(event.key) && !videos.highlighted()) {
        videos.highlightFirst();
        return;
      }
      switch (event.key) {
        case moving.Command.Left:
          videos.highlightPrevious();
          break;
        case moving.Command.Down:
          videos.highlightDown();
          break;
        case moving.Command.Up:
          videos.highlightUp();
          break;
        case moving.Command.Right:
          videos.highlightNext();
          break;
      }
    }
  });
};

main();

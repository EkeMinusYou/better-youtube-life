import { GridVideos } from "./grid-videos";
import { modifierKeyDown, moving } from "./keymaps";

const main = () => {
  const videos = new GridVideos();

  document.addEventListener("keydown", function (event) {
    const path = window.location.pathname;
    const target = event.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      return;
    }

    if (path === "/" && modifierKeyDown(event)) {
      event.preventDefault();
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

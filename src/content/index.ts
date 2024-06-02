import { GridVideos } from "./grid-videos";
import { modifierKeyDown, GridCommand } from "./keymaps";

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
        case GridCommand.Command.Left:
          videos.highlightPrevious();
          break;
        case GridCommand.Command.Down:
          videos.highlightDown();
          break;
        case GridCommand.Command.Up:
          videos.highlightUp();
          break;
        case GridCommand.Command.Right:
          videos.highlightNext();
          break;
        case GridCommand.Command.Click:
          videos.clickHighlighted();
          break;
      }
    }
  });
};

main();

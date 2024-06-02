import { GridVideos } from "./grid-videos";
import { modifierKeyDown, HomeCommand } from "./keymaps";

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
        case HomeCommand.Command.Left:
          videos.highlightPrevious();
          break;
        case HomeCommand.Command.Down:
          videos.highlightDown();
          break;
        case HomeCommand.Command.Up:
          videos.highlightUp();
          break;
        case HomeCommand.Command.Right:
          videos.highlightNext();
          break;
        case HomeCommand.Command.Click:
          videos.clickHighlighted();
          break;
        case HomeCommand.Command.Exit:
          videos.unhighlight();
          break;
      }
    }
  });
};

main();

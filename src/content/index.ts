import { GridVideos } from "./grid-videos";
import { homeModifier, HomeCommand, watchModifier, WatchCommand } from "./keymaps";

const main = () => {
  const videos = new GridVideos();

  document.addEventListener("keydown", function (event) {
    const path = window.location.pathname;
    const target = event.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      return;
    }

    if (path === "/" && homeModifier(event)) {
      if (!(event.key in HomeCommand.Command)) {
        return;
      }
      event.preventDefault();
      const action = HomeCommand.Command[event.key as keyof typeof HomeCommand.Command];
      switch (action) {
        case "Left":
          videos.highlightPrevious();
          break;
        case "Down":
          videos.highlightDown();
          break;
        case "Up":
          videos.highlightUp();
          break;
        case "Right":
          videos.highlightNext();
          break;
        case "Click":
          videos.clickHighlighted();
          break;
        case "Exit":
          videos.unhighlight();
          break;
      }
    }

    if (path === "/watch" && watchModifier(event)) {
      if (!(event.key in WatchCommand.Command)) {
        return;
      }
      event.preventDefault();
      const action = WatchCommand.Command[event.key as keyof typeof WatchCommand.Command];
      switch (action) {
        case "Go":
          window.history.go();
          break;
        case "Back":
          window.history.back();
          break;
      }
    }
  });
};

main();

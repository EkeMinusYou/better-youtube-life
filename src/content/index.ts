import { GridVideos } from "./grid-videos";
import { GlobalCommand, GridCommand, WatchCommand, buildModifer } from "./keymaps";

const main = () => {
  const videos = new GridVideos();

  document.addEventListener("keydown", (event) => {
    const path = window.location.pathname;
    const target = event.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      return;
    }

    if (event.key in GlobalCommand.Command && buildModifer(event, GlobalCommand.Modifier)) {
      event.preventDefault();
      const action = GlobalCommand.Command[event.key as keyof typeof GlobalCommand.Command];
      switch (action) {
        case "GoToHome":
          window.location.href = "/";
          break;
      }
    }

    if (path === "/" && buildModifer(event, GridCommand.Modifier)) {
      if (!(event.key in GridCommand.Command)) {
        return;
      }
      event.preventDefault();
      const action = GridCommand.Command[event.key as keyof typeof GridCommand.Command];
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

    if (path === "/watch" && buildModifer(event, WatchCommand.Modifier)) {
      if (!(event.key in WatchCommand.Command)) {
        return;
      }
      event.preventDefault();
      const action = WatchCommand.Command[event.key as keyof typeof WatchCommand.Command];
      switch (action) {
        case "Go":
          window.history.go(1);
          break;
        case "Back":
          window.history.back();
          break;
      }
    }
  });
};

main();

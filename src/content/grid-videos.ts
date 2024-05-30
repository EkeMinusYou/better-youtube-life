import { styles } from "./styles";

export class GridVideos {
  private current: number | undefined = undefined;

  private selectGridVideos() {
    return document.querySelectorAll("ytd-rich-item-renderer");
  }

  public highlightFirst() {
    const videos = this.selectGridVideos();

    if (this.current !== undefined) {
      videos[this.current].classList.remove(styles.highlight);
    }
    this.current = 0;
    videos[this.current].classList.add(styles.highlight);
  }

  public highlightNext() {
    if (this.current === undefined) {
      this.highlightFirst();
      return;
    }

    const videos = this.selectGridVideos();

    videos[this.current].classList.remove(styles.highlight);
    this.current++;
    videos[this.current].classList.add(styles.highlight);
  }

  public highlightPrevious() {
    if (this.current === undefined) {
      this.highlightFirst();
      return;
    }

    if (this.current === 0) return;

    const videos = this.selectGridVideos();

    videos[this.current].classList.remove(styles.highlight);
    this.current--;
    videos[this.current].classList.add(styles.highlight);
  }

  public highlightUp() {
    if (this.current === undefined) {
      this.highlightFirst();
      return;
    }
    const videos = this.selectGridVideos();
    const itemsPerRow = Number(videos[this.current].getAttribute("items-per-row"));

    if (this.current - itemsPerRow < 0) {
      return;
    }

    videos[this.current].classList.remove(styles.highlight);
    this.current -= itemsPerRow;
    videos[this.current].classList.add(styles.highlight);
  }

  public highlightDown() {
    if (this.current === undefined) {
      this.highlightFirst();
      return;
    }

    const videos = this.selectGridVideos();
    const itemsPerRow = Number(videos[this.current].getAttribute("items-per-row"));

    if (this.current + itemsPerRow >= videos.length) {
      return;
    }

    videos[this.current].classList.remove(styles.highlight);
    this.current += itemsPerRow;
    videos[this.current].classList.add(styles.highlight);
  }
}

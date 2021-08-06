import { IOffset } from "./offset";

export class Point {
  constructor(
    public x: number,
    public y: number,
  ) { }

  public Move(offset?: IOffset) {
    let x = this.x;
    let y = this.y;
    if (offset) {
      x += offset.offsetX;
      y += offset.offsetY;
    }
    return new Point(x, y);
  }
}

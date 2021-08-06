import { Point } from '../geometry/point';
import { Rect } from '../geometry/rect';
import { Texture } from '../texture/texture';

export class Snapshot {
  constructor(
    point: Point,
    public readonly texture: Texture,
  ) {
    this.point.x = point.x;
    this.point.y = point.y;
  }

  public readonly point = new Point(0, 0);

  public get Scope() {
    return new Rect(
      this.point,
      new Point(
        this.point.x + this.texture.dWidth,
        this.point.y + this.texture.dHeight,
      )
    );
  }
}

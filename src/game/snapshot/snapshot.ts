import { IPoint } from '../geometry/point';
import { Rect } from '../geometry/rect';
import { Texture } from '../texture/texture';

export class Snapshot {
  constructor(
    point: IPoint,
    public readonly texture: Texture,
  ) {
    this.point.x = point.x;
    this.point.y = point.y;
  }

  public readonly point: IPoint = {
    x: 0,
    y: 0,
  };

  public get Scope() {
    return new Rect(
      this.point,
      {
        x: this.point.x + this.texture.dWidth,
        y: this.point.y + this.texture.dHeight,
      },
    );
  }
}

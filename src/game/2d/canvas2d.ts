import { Snapshot } from '../snapshot/snapshot';
import { I2D } from './2d';

export class Canvas2D implements I2D {
  constructor(
    public readonly ctx: CanvasRenderingContext2D,
    public readonly width: number,
    public readonly height: number,
  ) { }

  public get Width() {
    return this.width;
  }

  public get Height() {
    return this.height;
  }

  DrawSnapshot(snapshots: Snapshot[]) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    snapshots.forEach((snapshot) => {
      this.ctx.drawImage(
        snapshot.texture.imageBitmap,
        snapshot.texture.sx,
        snapshot.texture.sy,
        snapshot.texture.sWidth,
        snapshot.texture.sHeight,
        snapshot.Scope.Left,
        snapshot.Scope.Top,
        snapshot.Scope.Width,
        snapshot.Scope.Height,
      );
    });
  }
}

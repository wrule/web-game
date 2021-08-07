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

  public DrawSnapshot(snapshots: Snapshot[]) {
    snapshots.forEach((snapshot) => {
      this.ctx.drawImage(
        snapshot.texture.imageBitmap,
        snapshot.texture.sx,
        snapshot.texture.sy,
        snapshot.texture.sWidth,
        snapshot.texture.sHeight,
        snapshot.RenderScope.Left,
        snapshot.RenderScope.Top,
        snapshot.RenderScope.Width,
        snapshot.RenderScope.Height,
      );
    });
  }

  public Clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}

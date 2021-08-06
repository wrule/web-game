import { Snapshot } from '../snapshot/snapshot';
import { I2D } from './2d';

export class OffscreenCanvas2d implements I2D {
  constructor(
    width: number,
    height: number,
  ) {
    this.offscreenCanvas = new OffscreenCanvas(width, height);
    this.ctx = this.offscreenCanvas.getContext('2d') as OffscreenCanvasRenderingContext2D;
  }

  private offscreenCanvas!: OffscreenCanvas;
  private ctx!: OffscreenCanvasRenderingContext2D;

  public get OffscreenCanvas() {
    return this.offscreenCanvas;
  }

  public get Width() {
    return this.offscreenCanvas.width;
  }

  public get Height() {
    return this.offscreenCanvas.height;
  }

  public DrawSnapshot(snapshots: Snapshot[]) {
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

  public Clear() {
    this.ctx.clearRect(0, 0, this.Width, this.Height);
  }
}

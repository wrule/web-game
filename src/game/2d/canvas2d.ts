import { Snapshot } from '../snapshot/snapshot';
import { I2D } from './2d';

export class Canvas2D implements I2D {
  constructor(
    public readonly ctx: CanvasRenderingContext2D,
  ) { }

  DrawSnapshot(snapshots: Snapshot[]) {
    snapshots.forEach((snapshot) => {
      this.ctx.drawImage(
        snapshot.texture.imageBitmap,
        snapshot.texture.sx,
        snapshot.texture.sy,
        snapshot.texture.sWidth,
        snapshot.texture.sHeight,
        snapshot.x,
        snapshot.y,
        snapshot.texture.dWidth,
        snapshot.texture.dHeight,
      );
    });
  }
}

import { IPoint } from '../geometry/point';
import { Rect } from '../geometry/rect';
import { ISize } from '../geometry/size';
import { Snapshot } from '../snapshot/snapshot';
import { Texture } from '../texture/texture';
import { Prop } from './prop';

export class TestMap extends Prop {
  constructor(
    point: IPoint,
    size: ISize,
    lawn: Texture,
    bush: Texture,
  ) {
    super(new Rect(
      point,
      {
        x: point.x + size.width * 32,
        y: point.y + size.height * 32,
      },
    ));
    for (let y = 0; y < size.height; ++y) {
      for (let x = 0; x < size.width; ++x) {
        this.snapshots.push(new Snapshot(
          {
            x: x * 32,
            y: y * 32,
          },
          (y * size.width + x) % 24 !== 0 ? lawn : bush,
        ))
      }
    }
  }

  private snapshots: Snapshot[] = [];

  public get mySnapshots() {
    return this.snapshots;
  }
}

import { IOffset } from './offset';
import { Point } from './point';

export abstract class Geometry<T> {
  abstract Move(offset: IOffset): void;

  abstract MoveTo(point: Point): void;

  public MoveUp(distance: number) {
    this.Move({ offsetX: 0, offsetY: -distance });
  }

  public MoveDown(distance: number) {
    this.Move({ offsetX: 0, offsetY: distance });
  }

  public MoveLeft(distance: number) {
    this.Move({ offsetX: -distance, offsetY: 0 });
  }

  public MoveRight(distance: number) {
    this.Move({ offsetX: distance, offsetY: 0 });
  }

  abstract Cast(offset?: IOffset): T;

  public CastUp(distance: number) {
    return this.Cast({ offsetX: 0, offsetY: -distance });
  }

  public CastDown(distance: number) {
    return this.Cast({ offsetX: 0, offsetY: distance });
  }

  public CastLeft(distance: number) {
    return this.Cast({ offsetX: -distance, offsetY: 0 });
  }

  public CastRight(distance: number) {
    return this.Cast({ offsetX: distance, offsetY: 0 });
  }
}

import { IOffset } from './offset';

export abstract class Geometry {
  abstract Move(offset: IOffset): void;

  public MoveTop(distance: number) {
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
}

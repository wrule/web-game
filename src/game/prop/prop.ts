import { Rect } from '../geometry/rect';
import { Snapshot } from '../snapshot/snapshot';

export enum EDirection {
  North,
  South,
  West,
  East,
}

export abstract class Prop {
  constructor(
    private scope: Rect,
  ) { }

  public get Scope() {
    return this.scope;
  }

  abstract mySnapshots: Snapshot[];

  /**
   * 道具的快照列表
   * 此快照列表可以被摄像机采集后按顺序直接渲染
   */
  public get Snapshots() {
    return this.mySnapshots.map((snapshot) => new Snapshot(
      {
        x: this.Scope.Left + snapshot.Scope.Left,
        y: this.Scope.Top + snapshot.Scope.Top,
      },
      snapshot.texture,
    ));
  }

  public Move(
    direction: EDirection,
    distance: number,
  ) {
    switch (direction) {
      case EDirection.North: {
        this.scope = new Rect(
          { x: this.scope.PointLeftTop.x, y: this.scope.PointLeftTop.y - distance },
          { x: this.scope.PointRightBottom.x, y: this.scope.PointRightBottom.y - distance },
        )
      } break;
      case EDirection.South: {
        this.scope = new Rect(
          { x: this.scope.PointLeftTop.x, y: this.scope.PointLeftTop.y + distance },
          { x: this.scope.PointRightBottom.x, y: this.scope.PointRightBottom.y + distance },
        )
      } break;
      case EDirection.West: {
        this.scope = new Rect(
          { x: this.scope.PointLeftTop.x - distance, y: this.scope.PointLeftTop.y },
          { x: this.scope.PointRightBottom.x - distance, y: this.scope.PointRightBottom.y },
        )
      } break;
      case EDirection.East: {
        this.scope = new Rect(
          { x: this.scope.PointLeftTop.x + distance, y: this.scope.PointLeftTop.y },
          { x: this.scope.PointRightBottom.x + distance, y: this.scope.PointRightBottom.y },
        )
      } break;
      default:
        throw new Error('');
    }
  }
}

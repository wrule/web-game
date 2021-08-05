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
    private name: string = '',
    private children: Prop[] = [],
    private parent?: Prop,
  ) {
    this.children.forEach((child) => {
      child.SetParent(this);
    });
  }

  public get Scope() {
    return this.scope;
  }

  public get Name() {
    return this.name;
  }

  public get Children() {
    return this.children;
  }

  public get Parent() {
    return this.parent;
  }

  public Add(prop: Prop) {
    this.children.push(prop);
  }

  public SetParent(prop: Prop | undefined) {
    this.parent = prop;
  }

  abstract MySnapshots: Snapshot[];

  /**
   * 内部快照列表
   */
  public get InnerSnapshots(): Snapshot[] {
    const result: Snapshot[] = [];
    result.push(...this.MySnapshots);
    this.children.forEach((child) => {
      result.push(...child.OuterSnapshots);
    });
    return result;
  }

  /**
   * 外部快照列表
   * 相机摄取此快照列表并且按顺序渲染图像
   */
  public get OuterSnapshots() {
    console.log('2> ', this.MySnapshots[0].Scope.PointLeftTop);
    return this.InnerSnapshots.map((snapshot) => new Snapshot(
      {
        x: this.scope.Left + snapshot.Scope.Left,
        y: this.scope.Top + snapshot.Scope.Top,
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
        // console.log('>> ', this.scope.PointLeftTop);
        this.scope = new Rect(
          { x: this.scope.PointLeftTop.x, y: this.scope.PointLeftTop.y + distance },
          { x: this.scope.PointRightBottom.x, y: this.scope.PointRightBottom.y + distance },
        )
        // console.log('<< ', this.scope.PointLeftTop);
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

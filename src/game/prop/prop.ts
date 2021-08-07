import { Point } from '../geometry/point';
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
    private renderScope: Rect,
    private name: string = '',
  ) { }

  public get RenderScope() {
    return this.renderScope;
  }

  public get Name() {
    return this.name;
  }

  abstract FormalChildren: Prop[];

  private freeChildren: Prop[] = [];

  public get FreeChildren() {
    return this.freeChildren;
  }

  public AddFreeChildren(prop: Prop) {
    this.freeChildren.push(prop);
  }

  public get Children() {
    return this.FormalChildren.concat(this.FreeChildren);
  }

  private parent?: Prop;

  public get Parent() {
    return this.parent;
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
    this.Children.forEach((child) => {
      result.push(...child.OuterSnapshots);
    });
    return result;
  }

  /**
   * 外部快照列表
   * 相机摄取此快照列表并且按顺序渲染图像
   */
  public get OuterSnapshots() {
    return this.InnerSnapshots.map((snapshot) => new Snapshot(
      new Point(
        this.renderScope.Left + snapshot.RenderScope.Left,
        this.renderScope.Top + snapshot.RenderScope.Top,
      ),
      snapshot.texture,
    ));
  }
}

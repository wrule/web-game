import { Rect } from '../geometry/rect';
import { Snapshot } from '../snapshot/snapshot';

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
}

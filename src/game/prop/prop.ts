import { Rect } from '../geometry/rect';
import { Snapshot } from '../snapshot/snapshot';

export abstract class Prop {
  constructor(
    private scope: Rect,
  ) { }

  public get Scope() {
    return this.scope;
  }

  /**
   * 道具的快照列表
   * 此快照列表可以被摄像机采集后按顺序渲染
   */
  abstract RelativeSnapshots: Snapshot[];

  public get Snapshots() {
    return this.RelativeSnapshots.map((snapshot) => new Snapshot(
      {
        x: this.Scope.Left + snapshot.Scope.Left,
        y: this.Scope.Top + snapshot.Scope.Top,
      },
      snapshot.texture,
    ));
  }
}

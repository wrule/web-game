import { Rect } from '../rect/rect';
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
  abstract Snapshots: Snapshot[];
}

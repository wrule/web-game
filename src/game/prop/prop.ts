import { Snapshot } from '../snapshot/snapshot';

export interface IProp {
  /**
   * 道具的快照列表
   * 此快照列表可以被摄像机采集后按顺序渲染
   */
  Snapshots: Snapshot[];
}

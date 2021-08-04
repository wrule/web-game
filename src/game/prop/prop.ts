import { Snapshot } from '../snapshot/snapshot';

export interface IProp {
  /**
   * 道具的快照列表，可以被摄像机采集且按顺序渲染
   */
  Snapshots: Snapshot[];
}

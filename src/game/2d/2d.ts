import { Snapshot } from "../snapshot/snapshot";

export interface I2D {
  DrawSnapshot(snapshots: Snapshot[]): void;
}

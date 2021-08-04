import { Snapshot } from "../snapshot/snapshot";

export interface I2D {
  Width: number,
  Height: number,
  DrawSnapshot(snapshots: Snapshot[]): void;
}

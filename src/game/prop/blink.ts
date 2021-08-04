import { Snapshot } from '../snapshot/snapshot';
import { IProp } from './prop';

export class Blink implements IProp {
  constructor(
    private snapshot1: Snapshot,
    private snapshot2: Snapshot,
  ) {
    setInterval(() => {
      this.flag = !this.flag;
    }, 1000);
  }

  private flag = true;

  public get Snapshots() {
    return this.flag ? [this.snapshot1] : [this.snapshot2];
  }
}

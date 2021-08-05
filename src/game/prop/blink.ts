import { Rect } from '../geometry/rect';
import { Snapshot } from '../snapshot/snapshot';
import { Prop } from './prop';

export class Blink extends Prop {
  constructor(
    scope: Rect,
    private snapshot1: Snapshot,
    private snapshot2: Snapshot,
  ) {
    super(scope);
    setInterval(() => {
      this.flag = !this.flag;
    }, 1000);
  }

  private flag = true;

  public get MySnapshots() {
    return this.flag ? [this.snapshot1] : [this.snapshot2];
  }
}

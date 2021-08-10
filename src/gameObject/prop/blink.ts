import { Rect } from '../geometry/rect';
import { Snapshot } from '../snapshot/snapshot';
import { Prop } from './prop';

export class Blink extends Prop {
  constructor(
    renderScope: Rect,
    private snapshot1: Snapshot,
    private snapshot2: Snapshot,
  ) {
    super(renderScope);
    setInterval(() => {
      this.flag = !this.flag;
    }, 1000);
  }

  public get FormalChildren() {
    return [];
  }

  private flag = true;

  public get MySnapshots() {
    return this.flag ? [this.snapshot1] : [this.snapshot2];
  }
}

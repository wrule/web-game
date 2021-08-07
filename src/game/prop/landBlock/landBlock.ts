import { Rect } from '@/game/geometry/rect';
import { Snapshot } from '@/game/snapshot/snapshot';
import { Prop } from '../prop';

export class LandBlock extends Prop {
  constructor(
    renderScope: Rect,
    private snapshot: Snapshot,
  ) {
    super(renderScope);
  }

  public get MySnapshots() {
    return [this.snapshot];
  }
}

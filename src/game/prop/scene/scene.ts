import { Rect } from '@/game/geometry/rect';
import { Land } from '../land/land';
import { Prop } from '../prop';

 
export class Scene extends Prop  {
  constructor(
    renderScope: Rect,
    land: Land,
  ) {
    super(
      renderScope,
    );
  }

  public get MySnapshots() {
    return [];
  }
}

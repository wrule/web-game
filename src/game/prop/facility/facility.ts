import { Rect } from '@/game/geometry/rect';
import { Prop } from '../prop';

 
export class Facility extends Prop  {
  constructor(
    renderScope: Rect,
  ) {
    super(
      renderScope,
    );
  }

  public get MySnapshots() {
    return [];
  }
}

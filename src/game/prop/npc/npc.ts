import { Rect } from '@/game/geometry/rect';
import { Prop } from '../prop';

export class Npc extends Prop {
  constructor(scope: Rect) {
    super(scope);
  }

  public get mySnapshots() {
    return [];
  }
}

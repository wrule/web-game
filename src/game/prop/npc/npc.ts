import { Rect } from '@/game/geometry/rect';
import { Snapshot } from '@/game/snapshot/snapshot';
import { Texture } from '@/game/texture/texture';
import { Prop } from '../prop';

export class Npc extends Prop {
  constructor(
    scope: Rect,
    private texture: Texture,
  ) {
    super(scope);
  }

  public get MySnapshots() {
    return [
      new Snapshot(
        this.Scope.PointLeftTop,
        this.texture,
      )
    ];
  }
}

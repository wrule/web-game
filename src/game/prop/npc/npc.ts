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
    this.snapshot = new Snapshot(
      {
        x: this.Scope.PointLeftTop.x,
        y: this.Scope.PointLeftTop.y,
      },
      this.texture,
    );
  }

  private snapshot!: Snapshot;

  public get MySnapshots() {
    return [
      this.snapshot,
    ];
  }
}

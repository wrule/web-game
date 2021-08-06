import { Point } from '@/game/geometry/point';
import { Rect } from '@/game/geometry/rect';
import { Snapshot } from '@/game/snapshot/snapshot';
import { Texture } from '@/game/texture/texture';
import { Prop } from '../prop';
import { ENpcWalkDirection } from './npcWalkDirection';
import { NpcWalkState } from './npcWalkState';

export class Npc extends Prop {
  constructor(
    scope: Rect,
    private state: NpcWalkState,
  ) {
    super(scope);
  }

  public Walk(direction: ENpcWalkDirection) {
    switch (direction) {
      case ENpcWalkDirection.North: {
        this.Scope.MoveUp(4);
      } break;
      case ENpcWalkDirection.South: {
        this.Scope.MoveDown(4);
      } break;
      case ENpcWalkDirection.West: {
        this.Scope.MoveLeft(4);
      } break;
      case ENpcWalkDirection.East: {
        this.Scope.MoveRight(4);
      } break;
      default:
        throw new Error('');
    }
    this.state.Walk(direction);
  }

  private snapshot!: Snapshot;

  public get MySnapshots() {
    return [
      new Snapshot(new Point(0, 0), this.state.CurrentTexture),
    ];
  }
}

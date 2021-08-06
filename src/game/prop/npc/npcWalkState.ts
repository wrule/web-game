import { Texture } from '@/game/texture/texture';
import { ENpcWalkDirection } from './npcWalkDirection';

export class NpcWalkState {
  constructor(
    private textureMap: Map<ENpcWalkDirection, Texture[]>,
    private direction: ENpcWalkDirection = ENpcWalkDirection.South,
    private posture: number = 0,
  ) { }

  public Walk(direction: ENpcWalkDirection) {
    if (direction === this.direction) {
      this.posture++;
      const textureList = this.textureMap.get(this.direction);
      if (textureList) {
        if (this.posture > textureList.length - 1) {
          this.posture = 0;
        }
      }
      throw new Error('');
    } else {
      this.posture = 0;
    }
    this.direction = direction;
  }

  public get CurrentTextureList() {
    const result = this.textureMap.get(this.direction);
    if (result) {
      return result;
    }
    throw new Error('');
  }

  public get CurrentTexture() {
    return this.CurrentTextureList[this.posture];
  }
}

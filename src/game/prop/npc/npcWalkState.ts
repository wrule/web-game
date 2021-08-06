import { Texture } from '@/game/texture/texture';
import { ENpcWalkDirection } from './npcWalkDirection';

export class NpcWalkState {
  constructor(
    private textureMap: Map<ENpcWalkDirection, Texture[]>,
    private direction: ENpcWalkDirection = ENpcWalkDirection.South,
    private posture: number = 0,
  ) {
    if (
      this.textureMap.size < 1 ||
      Array.from(this.textureMap.values())
        .some((textureList) => textureList.length < 1)
    ) {
      throw new Error('');
    }
  }

  public Walk(direction: ENpcWalkDirection) {
    if (direction === this.direction) {
      this.posture++;
      if (this.posture > this.CurrentTextureList.length - 1) {
        this.posture = 0;
      }
    } else {
      this.posture = 0;
      this.direction = direction;
    }
  }

  public get CurrentTextureList() {
    const result = this.textureMap.get(this.direction);
    if (result) {
      return result;
    }
    return Array.from(this.textureMap.values())[0];
  }

  public get CurrentTexture() {
    return this.CurrentTextureList[this.posture];
  }
}

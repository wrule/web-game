import { Texture } from '../texture/texture';

export class Snapshot {
  constructor(
    public readonly x: number,
    public readonly y: number,
    public readonly texture: Texture
  ) { }
}

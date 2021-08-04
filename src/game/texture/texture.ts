
export class Texture {
  constructor(
    public readonly imageBitmap: ImageBitmap,
    public readonly sx: number,
    public readonly sy: number,
    public readonly sWidth: number,
    public readonly sHeight: number,
    public readonly dWidth?: number,
    public readonly dHeight?: number,
  ) {
    this.dWidth = this.dWidth !== undefined ?
      this.dWidth :
      this.sWidth;
    this.dHeight = this.dHeight !== undefined ?
      this.dHeight :
      this.sHeight;
  }
}

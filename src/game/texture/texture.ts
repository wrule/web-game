
export class Texture {
  constructor(
    public readonly imageBitmap: ImageBitmap,
    public readonly sx: number,
    public readonly sy: number,
    public readonly sWidth: number,
    public readonly sHeight: number,
    dWidth?: number,
    dHeight?: number,
  ) {
    this.dWidth = dWidth !== undefined ?
      dWidth :
      this.sWidth;
    this.dHeight = dHeight !== undefined ?
      dHeight :
      this.sHeight;
  }

  public readonly dWidth: number;
  public readonly dHeight: number;
}

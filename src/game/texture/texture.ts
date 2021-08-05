/**
 * 贴图类
 */
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
    if (
      this.sWidth < 0 ||
      this.sHeight < 0 ||
      this.dWidth < 0 ||
      this.dHeight < 0
    ) {
      throw new Error('贴图的尺寸不能为负');
    }
  }

  public readonly dWidth: number;
  public readonly dHeight: number;
}

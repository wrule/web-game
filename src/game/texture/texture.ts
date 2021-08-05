/**
 * 贴图类
 * 此类代表最基本的一个有意义的贴图
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
      this.sWidth < 1 ||
      this.sHeight < 1 ||
      this.dWidth < 1 ||
      this.dHeight < 1
    ) {
      throw new Error('贴图尺寸必须大于等于1');
    }
  }

  public readonly dWidth: number;
  public readonly dHeight: number;
}

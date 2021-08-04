
export interface IRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class Rect implements IRect {
  constructor(
    private rect: IRect,
  ) { }

  public get x() {
    return this.rect.x;
  }

  public get y() {
    return this.rect.y;
  }

  public get width() {
    return this.rect.width;
  }

  public get height() {
    return this.rect.height;
  }

  public get x2() {
    return this.rect.x + this.rect.width - 1;
  }

  public get y2() {
    return this.rect.y + this.rect.height - 1;
  }

  /**
   * 判断本矩形与目标矩形是否相交
   * @param rect 目标矩形
   * @returns 是否相交
   */
  public IsOverlap(rect: IRect) {
    const dstRect = new Rect(rect);
    return !(
      dstRect.y2 < this.y ||
      dstRect.y > this.y2 ||
      dstRect.x2 < this.x ||
      dstRect.x > this.x2
    );
  }
}

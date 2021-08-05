import { IPoint } from './point';

export class Rect {
  constructor(
    point1: IPoint,
    point2: IPoint,
  ) {
    this.left = point1.x;
    this.right = point2.x;
    if (point1.x > point2.x) {
      this.left = point2.x;
      this.right = point1.x;
    }
    this.top = point1.y;
    this.bottom = point2.y;
    if (point1.y > point2.y) {
      this.top = point2.y;
      this.bottom = point1.y;
    }
  }

  private top: number;
  private bottom: number;
  private left: number;
  private right: number;

  public get Top() {
    return this.top;
  }

  public get Bottom() {
    return this.bottom;
  }

  public get Left() {
    return this.left;
  }

  public get Right() {
    return this.right;
  }

  public get Width() {
    return this.right - this.left;
  }

  public get Height() {
    return this.bottom - this.top;
  }

  public get PointLeftTop(): IPoint {
    return {
      x: this.left,
      y: this.top,
    }
  }

  public get PointRightBottom(): IPoint {
    return {
      x: this.right,
      y: this.bottom,
    };
  }

  /**
   * 判断本矩形与目标矩形是否相交
   * @param rect 目标矩形
   * @returns 是否相交
   */
  public IsOverlap(rect: Rect) {
    return !(
      rect.bottom <= this.top ||
      rect.top >= this.bottom ||
      rect.right <= this.left ||
      rect.left >= this.right
    );
  }
}

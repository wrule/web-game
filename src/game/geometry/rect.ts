/* eslint-disable */

import { Geometry } from './geometry';
import { IOffset } from './offset';
import { Point } from './point';

export class Rect extends Geometry<Rect> {
  constructor(
    point1: Point,
    point2: Point,
  ) {
    super();
    let left = point1.x;
    let right = point2.x;
    if (point1.x > point2.x) {
      left = point2.x;
      right = point1.x;
    }
    let top = point1.y;
    let bottom = point2.y;
    if (point1.y > point2.y) {
      top = point2.y;
      bottom = point1.y;
    }
    this.pointLeftTop = new Point(left, top);
    this.pointRightBottom = new Point(right, bottom);
  }

  public Move(offset: IOffset) {
    this.pointLeftTop.Move(offset);
    this.pointRightBottom.Move(offset);
  }

  public MoveTo(point: Point) {
    const offset = this.pointLeftTop.Offset(point);
    this.Move(offset);
  }

  public Cast(offset?: IOffset): Rect {
    return new Rect(
      this.pointLeftTop.Cast(offset),
      this.pointRightBottom.Cast(offset),
    );
  }

  private pointLeftTop!: Point;
  private pointRightBottom!: Point;

  public get Top() {
    return this.pointLeftTop.y;
  }

  public get Bottom() {
    return this.pointRightBottom.y;
  }

  public get Left() {
    return this.pointLeftTop.x;
  }

  public get Right() {
    return this.pointRightBottom.x;
  }

  public get Width() {
    return this.Right - this.Left;
  }

  public get Height() {
    return this.Bottom - this.Top;
  }

  public get PointLeftTop(): Point {
    return this.pointLeftTop;
  }

  public get PointRightBottom(): Point {
    return this.pointRightBottom;
  }

  public get PointCenter(): Point {
    return this.PointLeftTop.Cast({
      offsetX: this.Width / 2,
      offsetY: this.Height / 2,
    });
  }

  /**
   * 判断本矩形与目标矩形是否相交
   * @param rect 目标矩形
   * @returns 是否相交
   */
  public IsOverlap(rect: Rect) {
    return !(
      rect.Bottom <= this.Top ||
      rect.Top >= this.Bottom ||
      rect.Right <= this.Left ||
      rect.Left >= this.Right
    );
  }
}

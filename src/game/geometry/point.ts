import { Geometry } from './geometry';
import { IOffset } from './offset';

export class Point extends Geometry<Point> {
  constructor(
    public x: number,
    public y: number,
  ) {
    super();
  }

  public Move(offset: IOffset) {
    this.x += offset.offsetX;
    this.y += offset.offsetY;
  }

  public MoveTo(point: Point) {
    this.Move(this.Offset(point));
  }

  public Offset(point: Point): IOffset {
    return {
      offsetX: point.x - this.x,
      offsetY: point.y - this.y,
    };
  }

  public Cast(offset?: IOffset): Point {
    const result = new Point(this.x, this.y);
    if (offset) {
      result.Move(offset);
    }
    return result;
  }
}

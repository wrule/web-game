/* eslint-disable */

import { I2D } from '../2d/2d';
import { IOffset } from '../geometry/offset';
import { IPoint } from '../geometry/point';
import { Rect } from '../geometry/rect';
import { ISize } from '../geometry/size';
import { Prop } from '../prop/prop';
import { Snapshot } from '../snapshot/snapshot';

export enum ELookAtType {
  AtProp,
  AtPoint
}

export class Camera {
  constructor(
    private i2d: I2D,
    pictureSize: ISize,
  ) {
    // 计算焦点四周空间
    let horizontalSpace = pictureSize.width - 1;
    if (horizontalSpace < 0) {
      horizontalSpace = 0;
    }
    this.leftSpace = Math.floor(horizontalSpace / 2);
    this.rightSpace = horizontalSpace - this.leftSpace;
    let verticalSpace = pictureSize.height - 1;
    if (verticalSpace < 0) {
      verticalSpace = 0;
    }
    this.topSpace = Math.floor(verticalSpace / 2);
    this.bottomSpace = verticalSpace - this.topSpace;
  }

  private readonly leftSpace: number = 0;
  private readonly rightSpace: number = 0;
  private readonly topSpace: number = 0;
  private readonly bottomSpace: number = 0;

  private curProp!: Prop;
  private curFps!: number;
  private interval!: number;

  private render() {
    this.i2d.DrawSnapshot(
      this.curProp.Snapshots
    );
    setTimeout(() => {
      this.render();
    }, this.interval);
  }

  private lookAtType: ELookAtType = ELookAtType.AtPoint;

  private lookPoint: IPoint = { x: 0, y: 0 };
  public LookAtPoint(
    point: IPoint,
  ) {
    this.lookPoint.x = point.x;
    this.lookPoint.y = point.y;
    this.lookAtType = ELookAtType.AtPoint;
  }

  private lookProp!: Prop;
  public LookAtProp(
    prop: Prop,
  ) {
    this.lookProp = prop;
    this.lookAtType = ELookAtType.AtProp;
  }

  /**
   * 当前摄像机聚焦的坐标点
   */
  public get CurrentLookPoint(): IPoint {
    switch (this.lookAtType) {
      case ELookAtType.AtProp:
        return this.lookProp.Scope.PointCenter;
      case ELookAtType.AtPoint:
        return this.lookPoint;
      default:
        throw new Error('this.lookAtType的枚举值非法');
    }
  }

  /**
   * 摄像机的拍摄区域
   */
  public get Scope() {
    const point1 = {
      x: this.CurrentLookPoint.x - this.leftSpace,
      y: this.CurrentLookPoint.y - this.topSpace,
    };
    const point2 = {
      x: this.CurrentLookPoint.x + this.rightSpace,
      y: this.CurrentLookPoint.y + this.bottomSpace,
    };
    return new Rect(point1, point2);
  }

  public Recording(
    prop: Prop,
    fps: number,
  ) {
    this.curProp = prop;
    this.curFps = fps;
    this.interval = 1000 / this.curFps;
    this.render();
  }
}

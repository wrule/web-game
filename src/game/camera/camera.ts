/* eslint-disable */

import { I2D } from '../2d/2d';
import { IPoint } from '../geometry/point';
import { Rect } from '../geometry/rect';
import { ISize } from '../geometry/size';
import { Prop } from '../prop/prop';

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
    this.i2d.DrawSnapshot(this.curProp.Snapshots);
    setTimeout(() => {
      this.render();
    }, this.interval);
  }

  private lookAtType: ELookAtType = ELookAtType.AtPoint;

  private curLookProp!: Prop;
  private curLookPropOffsetX: number = 0;
  private curLookPropOffsetY: number = 0;

  public LookAtProp(
    prop: Prop,
    offsetX: number = 0,
    offsetY: number = 0,
  ) {
    this.curLookProp = prop;
    this.curLookPropOffsetX = offsetX;
    this.curLookPropOffsetY = offsetY;
    this.lookAtType = ELookAtType.AtProp;
  }

  private curLookPoint: IPoint = { x: 0, y: 0 };
  public LookAtPoint(
    point: IPoint,
  ) {
    this.curLookPoint = point;
    this.lookAtType = ELookAtType.AtPoint;
  }

  public get CurLookPoint(): IPoint {
    if (this.lookAtType === ELookAtType.AtPoint) {
      return this.curLookPoint;
    } else {
      return {
        x: this.curLookProp.Scope.Left + this.curLookPropOffsetX,
        y: this.curLookProp.Scope.Top + this.curLookPropOffsetY,
      };
    }
  }

  /**
   * 摄像机的可视区域
   */
  public get Scope() {
    const point1 = {
      x: this.CurLookPoint.x - this.leftSpace,
      y: this.CurLookPoint.y - this.topSpace,
    };
    const point2 = {
      x: this.CurLookPoint.x + this.rightSpace,
      y: this.CurLookPoint.y + this.bottomSpace,
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

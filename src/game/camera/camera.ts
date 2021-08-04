/* eslint-disable */

import { I2D } from '../2d/2d';
import { IPoint } from '../geometry/point';
import { ISize } from '../geometry/size';
import { Prop } from '../prop/prop';

export enum ELookAtType {
  AtProp,
  AtPoint
}

export class Camera {
  constructor(
    private i2d: I2D,
    private pictureSize: ISize,
  ) { }

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

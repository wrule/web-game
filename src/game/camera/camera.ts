/* eslint-disable */

import { I2D } from '../2d/2d';
import { IPoint } from '../geometry/point';
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
  ) { }

  private curProp!: Prop;
  private curFps!: number;
  private interval!: number;

  private transform(point: IPoint): IPoint {
    return {
      x: point.x - this.CurrentLookPoint.x + this.i2d.Width / 2,
      y: point.y - this.CurrentLookPoint.y + this.i2d.Height / 2,
    };
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

  public TakePhoto(
    prop: Prop,
  ): I2D {
    this.i2d.Clear();
    this.i2d.DrawSnapshot(
      this.curProp.OuterSnapshots.map((snapshot) => new Snapshot(
        this.transform(snapshot.Scope.PointLeftTop),
        snapshot.texture,
      ))
    );
    return this.i2d;
  }

  public TakeVideo(
    prop: Prop,
    fps: number,
  ) {
    this.curProp = prop;
    this.curFps = fps;
    this.interval = 1000 / this.curFps;
    setInterval(() => {
      this.TakePhoto(prop);
    }, this.interval);
  }
}

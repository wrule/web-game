import { I2D } from '../2d/2d';
import { IPoint } from '../geometry/point';
import { Prop } from '../prop/prop';
import { Snapshot } from '../snapshot/snapshot';
import { ELookAtType } from './lookAtType';

/**
 * 相机类
 */
export class Camera {
  constructor(
    private i2d: I2D,
  ) { }

  private currentProp!: Prop;

  /**
   * 当前拍摄的道具
   */
  public get CurrentProp() {
    return this.currentProp;
  }

  private currentFps = 30;

  /**
   * 当前每秒帧数
   */
  public get CurrentFps() {
    return this.currentFps;
  }

  private currentInterval!: number;

  private lookAtType: ELookAtType = ELookAtType.LookAtPoint;

  private lookPoint: IPoint = { x: 0, y: 0 };

  /**
   * 把相机聚焦目标坐标点
   * @param point 目标坐标点
   */
  public LookAtPoint(
    point: IPoint,
  ) {
    this.lookPoint.x = point.x;
    this.lookPoint.y = point.y;
    this.lookAtType = ELookAtType.LookAtPoint;
  }

  private lookProp!: Prop;

  /**
   * 把相机聚焦目标道具中心点
   * @param prop 目标道具
   */
  public LookAtProp(
    prop: Prop,
  ) {
    this.lookProp = prop;
    this.lookAtType = ELookAtType.LookAtProp;
  }

  /**
   * 当前相机聚焦的坐标点
   */
  public get CurrentLookPoint(): IPoint {
    switch (this.lookAtType) {
      case ELookAtType.LookAtProp:
        return this.lookProp.Scope.PointCenter;
      case ELookAtType.LookAtPoint:
        return this.lookPoint;
      default:
        throw new Error('ELookAtType类型的枚举值非法');
    }
  }

  private takeVideoTimer = - 1;

  /**
   * 拍摄视频
   * @param prop 目标道具
   * @param fps 理想帧数
   * @param callback 帧回调函数
   */
  public TakeVideo(
    prop: Prop,
    fps = 30,
    callback?: (i2d: I2D) => void,
  ) {
    clearTimeout(this.takeVideoTimer);
    this.currentProp = prop;
    this.currentFps = fps;
    this.currentInterval = 1000 / this.currentFps;
    this.takeVideo(callback);
  }

  private takeVideo(
    callback?: (i2d: I2D) => void,
  ) {
    const photo = this.takePhoto();
    if (callback) {
      callback(photo);
    }
    this.takeVideoTimer = setTimeout(() => {
      this.takeVideo(callback);
    }, this.currentInterval);
  }

  /**
   * 拍摄照片
   * @param prop 目标道具
   * @returns 内部I2D类型的图像
   */
  public TakePhoto(
    prop: Prop,
  ): I2D {
    clearTimeout(this.takeVideoTimer);
    this.currentProp = prop;
    return this.takePhoto();
  }

  private takePhoto() {
    this.i2d.Clear();
    this.i2d.DrawSnapshot(
      this.currentProp.OuterSnapshots.map((snapshot) => new Snapshot(
        this.transform(snapshot.Scope.PointLeftTop),
        snapshot.texture,
      ))
    );
    return this.i2d;
  }

  private transform(point: IPoint): IPoint {
    return {
      x: point.x - this.CurrentLookPoint.x + this.i2d.Width / 2,
      y: point.y - this.CurrentLookPoint.y + this.i2d.Height / 2,
    };
  }
}

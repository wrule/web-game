import { I2D } from '../2d/2d';
import { Prop } from '../prop/prop';

export class Camera {
  constructor(
    private i2d: I2D,
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

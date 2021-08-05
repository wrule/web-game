import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import spriteImg from '@/assets/0.png';
import { Texture } from '@/game/texture/texture';
import { Snapshot } from '@/game/snapshot/snapshot';
import { Blink } from '@/game/prop/blink';
import { Canvas2D } from '@/game/2d/canvas2d';
import { Camera } from '@/game/camera/camera';
import { Rect } from '@/game/geometry/rect';

@Component
export default class ViewHome extends Vue {

  private elCanvas!: HTMLCanvasElement;

  private ctx!: CanvasRenderingContext2D;

  private elSpriteImage!: HTMLImageElement;

  private spriteImageBitmap!: ImageBitmap;

  public async mounted() {
    this.elCanvas = this.$el.querySelector('canvas') as HTMLCanvasElement;
    this.ctx = this.elCanvas.getContext('2d') as CanvasRenderingContext2D;
    this.elSpriteImage = this.$el.querySelector('img') as HTMLImageElement;
    this.spriteImageBitmap = await createImageBitmap(this.elSpriteImage);
    
    const texture1 = new Texture(this.spriteImageBitmap, 96, 64, 32, 32);
    const texture2 = new Texture(this.spriteImageBitmap, 96, 96, 32, 32);
    const snapshot1 = new Snapshot({ x: 0, y: 0 }, texture1);
    const snapshot2 = new Snapshot({ x: 0, y: 0 }, texture1);
    const blink = new Blink(
      new Rect({ x: 0, y: 0 }, { x: 32, y: 32 }),
      snapshot1,
      snapshot2,
    );

    const canvas2d = new Canvas2D(this.ctx, this.elCanvas.width, this.elCanvas.height);
    const camera = new Camera(canvas2d, {
      width: 34,
      height: 34,
    });

    // camera.LookAtPoint({ x: 15, y: 15 });
    camera.LookAtProp(blink);
    console.log(camera.CurrentLookPoint);

    camera.Recording(blink, 30);
  }

  public render(): VNode {
    return (
      <div class={style.view}>
        <canvas
          width="34"
          height="34"
          class={style.canvas}
        />
        <img
          class={style.image}
          src={spriteImg}
        />
      </div>
    );
  }
}

import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import spriteImg from '@/assets/0.png';

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
    this.ctx.drawImage(
      this.spriteImageBitmap,
      0,
      0,
      32,
      32,
      0,
      0,
      32,
      32,
    );
  }

  public render(): VNode {
    return (
      <div class={style.view}>
        <canvas
          width="640"
          height="400"
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

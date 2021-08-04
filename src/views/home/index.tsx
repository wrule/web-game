import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import spriteImg from '@/assets/0.png';
import { Texture } from '@/game/texture/texture';
import { Snapshot } from '@/game/snapshot/snapshot';

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
    
    const texture = new Texture(this.spriteImageBitmap, 0, 0, 64, 64);
    const snapshot = new Snapshot(32, 0, texture);
    this.ctx.drawImage(
      this.spriteImageBitmap,
      snapshot.texture.sx,
      snapshot.texture.sy,
      snapshot.texture.sWidth,
      snapshot.texture.sHeight,
      snapshot.x,
      snapshot.y,
      snapshot.texture.dWidth,
      snapshot.texture.dHeight,
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

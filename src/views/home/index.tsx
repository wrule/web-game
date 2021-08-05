import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import spriteImg from '@/assets/0.png';
import actorImg from '@/assets/actor.png';
import { Texture } from '@/game/texture/texture';
import { Snapshot } from '@/game/snapshot/snapshot';
import { Blink } from '@/game/prop/blink';
import { Canvas2D } from '@/game/2d/canvas2d';
import { Camera } from '@/game/camera/camera';
import { Rect } from '@/game/geometry/rect';
import { TestMap } from '@/game/prop/testMap';
import { EDirection } from '@/game/prop/prop';
import { Npc } from '@/game/prop/npc/npc';

@Component
export default class ViewHome extends Vue {

  private elCanvas!: HTMLCanvasElement;

  private ctx!: CanvasRenderingContext2D;

  private elSpriteImage!: HTMLImageElement;

  private spriteImageBitmap!: ImageBitmap;

  private async queryImageBitmap(selector: string): Promise<ImageBitmap> {
    const elImage = this.$el.querySelector(selector) as HTMLImageElement;
    if (elImage) {
      const imageBitmap = await createImageBitmap(elImage);
      if (imageBitmap) {
        return imageBitmap;
      }
      throw new Error('无法创建ImageBitmap');
    }
    throw new Error('查找不到img元素');
  }

  public async mounted() {
    this.elCanvas = this.$el.querySelector('canvas') as HTMLCanvasElement;
    this.ctx = this.elCanvas.getContext('2d') as CanvasRenderingContext2D;
    
    this.spriteImageBitmap = await this.queryImageBitmap('.sprite');
    const actorImageBitmap = await this.queryImageBitmap('.actor');
    
    const lawn = new Texture(this.spriteImageBitmap, 0, 0, 32, 32);
    const bush = new Texture(this.spriteImageBitmap, 0, 32, 32, 32);
    const testMap = new TestMap(
      { x: 0, y: 0 },
      { width: 38, height: 20, },
      lawn,
      bush,
    )

    const canvas2d = new Canvas2D(this.ctx, this.elCanvas.width, this.elCanvas.height);
    const camera = new Camera(canvas2d, {
      width: 640,
      height: 400,
    });

    const walkTexture: Texture[][] = [];
    for (let y = 0; y < 4; ++y) {
      walkTexture[y] = [];
      for (let x = 0; x < 4; ++x) {
        walkTexture[y][x] = new Texture(
          actorImageBitmap,
          x * 32,
          y * 48,
          32,
          48,
        )
      }
    }

    const actor = new Npc(
      new Rect({ x: 0, y: 0 }, { x: 32, y: 48 }),
      walkTexture[0][0],
    );

    testMap.Add(actor);

    // camera.LookAtPoint({ x: 0, y: 0 });
    camera.LookAtProp(actor);
    console.log(camera.CurrentLookPoint);

    camera.Recording(testMap, 30);

    setInterval(() => {
      actor.Move(EDirection.South, 1);
    }, 100);
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
          class="sprite"
          src={spriteImg}
        />
        <img
          class="actor"
          src={actorImg}
        />
      </div>
    );
  }
}

import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import actorImage from '@/assets/actor.png';
import { WebImageBitmapImageResource } from '@/game/gameObject/resource/imageResource/webImageBitmapImageResource';

@Component
export default class ViewHome extends Vue {
  private async mounted() {
    const elImage = this.$el.querySelector('img') as HTMLImageElement;
    const imageBitmap = await createImageBitmap(elImage);
    const res = new WebImageBitmapImageResource(imageBitmap);
    console.log(res.ToModel());
  }

  public render(): VNode {
    return (
      <div class={style.view}>
        <img src={actorImage} />
      </div>
    );
  }
}

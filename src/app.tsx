import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './app.module.scss';

@Component
export default class App extends Vue {
  public render(): VNode {
    return (
      <router-view class={style.app}/>
    );
  }
}

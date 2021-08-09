import { IGameObjectFactory } from './gameObjectFactory';

export abstract class GameObject<
  T,
  TModel,
  TFactory extends IGameObjectFactory<T, TModel>,
> {
  /**
   * 获取对象的数据模型
   */
  abstract ToModel(): TModel;
  /**
   * 获取对象的工厂对象
   */
  abstract GetFactory(): TFactory;
  /**
   * 深度克隆对象
   */
  public Clone() {
    return this.GetFactory().FromModel(this.ToModel());
  }
}

import { IGameObjectFactory } from './gameObjectFactory';
import UUID from 'uuid';
import { IGameObjectModel } from './gameObjectModel';

export
abstract class GameObject<
  T,
  TModel extends IGameObjectModel,
  TFactory extends IGameObjectFactory<T, TModel>,
> {
  constructor(
    uuid?: string,
  ) {
    this.uuid = uuid || UUID.v4();
  }

  private uuid: string;

  /**
   * 对象的唯一UUID
   */
  public get UUID() {
    return this.uuid;
  }
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
  public Clone(): T {
    return this.GetFactory().FromModel(this.ToModel());
  }
}
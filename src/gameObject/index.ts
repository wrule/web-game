import UUID from 'uuid';
import { IGameObjectModel } from './model';
import { IGameObjectFactory } from './factory';

export
abstract class GameObject<
  T,
  TModel extends IGameObjectModel,
  TFactory extends IGameObjectFactory<T, TModel>,
> {
  /**
   * 构造函数
   * @param uuid UUID，如果不传则自动生成新的UUID
   */
  constructor(
    uuid?: string,
  ) {
    this.uuid = uuid || UUID.v4();
  }

  private uuid: string;

  /**
   * 获取对象的UUID
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

import UUID from 'uuid';
import { IGameObjectFactory } from './factory';
import { IGameObjectModel } from './model';

/**
 * 顶级泛型抽象类
 */
export
abstract class GameObject<
  T,
  TModel extends IGameObjectModel,
  TFactory extends IGameObjectFactory<T, TModel>,
> {
  /**
   * 构造函数
   * @param uuid UUID，如果不传则生成新的UUID
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

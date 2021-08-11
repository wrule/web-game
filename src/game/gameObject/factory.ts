import { IGameObjectModel } from './model';

/**
 * 顶级泛型接口工厂
 */
export
interface IGameObjectFactory<
  T,
  TModel extends IGameObjectModel
> {
  FromModel(model: TModel): T;
}

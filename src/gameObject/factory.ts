import { IGameObjectModel } from './model';

export
interface IGameObjectFactory<
  T,
  TModel extends IGameObjectModel
> {
  FromModel(model: TModel): T;
}

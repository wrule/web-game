import { IGameObjectModel } from "./gameObjectModel";

export
interface IGameObjectFactory<T, TModel extends IGameObjectModel> {
  FromModel(model: TModel): T;
}

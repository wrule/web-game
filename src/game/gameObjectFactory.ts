
export interface IGameObjectFactory<T, IModel> {
  FromModel(model: T): T;
}

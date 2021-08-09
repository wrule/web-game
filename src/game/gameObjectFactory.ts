
export interface IGameObjectFactory<T, TModel> {
  FromModel(model: TModel): T;
}

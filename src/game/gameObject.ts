
export interface IGameObject<T, TModel> {
  Clone(): T;
  Model(): TModel;
}

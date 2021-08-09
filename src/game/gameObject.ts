
export interface IGameObject<T, TModel> {
  /**
   * 获取对象的数据模型
   */
  ToModel(): TModel;
  /**
   * 深度克隆对象
   */
  Clone(): T;
}

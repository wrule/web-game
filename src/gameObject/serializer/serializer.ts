
export interface ISerializer<TModel> {
  Serialize(model: TModel): string;
  Deserialize(sequence: string): TModel;
}

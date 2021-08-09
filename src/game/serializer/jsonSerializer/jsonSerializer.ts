import { ISerializer } from "../serializer";

export class JsonSerializer<TModel> implements ISerializer<TModel> {
  public Serialize(model: TModel): string {
    return JSON.stringify(model, null, 2);
  }

  public Deserialize(sequence: string): TModel {
    return JSON.parse(sequence);
  }
}

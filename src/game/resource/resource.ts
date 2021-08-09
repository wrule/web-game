import { GameObject } from "../gameObject";
import { IResourceFactory } from "./resourceFactory";
import { IResourceModel } from "./resourceModel";

export
abstract class
Resource<
  T,
  TModel extends IResourceModel,
  TFactory extends IResourceFactory<T, TModel>,
>
extends GameObject<T, TModel, TFactory> {
  abstract ToBase64(): string;
}

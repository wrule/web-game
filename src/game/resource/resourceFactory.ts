import { IGameObjectFactory } from "../gameObjectFactory";
import { Resource } from "./resource";
import { IResourceModel } from "./resourceModel";

export
interface IResourceFactory<T, TModel extends IResourceModel>
extends IGameObjectFactory<T, TModel> {

}

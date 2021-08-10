import { IGameObjectFactory } from "../gameObjectFactory";
import { IResourceModel } from "./resourceModel";

export
interface IResourceFactory<T, TModel extends IResourceModel>
extends IGameObjectFactory<T, TModel> { }

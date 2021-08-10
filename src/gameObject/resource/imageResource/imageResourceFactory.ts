import { IResourceFactory } from "../resourceFactory";
import { IImageResourceModel } from "./imageResourceModel";

export
interface IImageResourceFactory<T, TModel extends IImageResourceModel>
extends IResourceFactory<T, TModel> { }

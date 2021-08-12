import { IResourceFactory } from '../factory';
import { IImageResourceModel } from './model';

export
interface IImageResourceFactory<
  T,
  TModel extends IImageResourceModel
>
extends IResourceFactory<
  T,
  TModel
> { }

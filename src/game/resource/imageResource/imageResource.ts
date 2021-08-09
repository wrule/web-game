import { Resource } from '../resource';
import { IImageResourceFactory } from './imageResourceFactory';
import { IImageResourceModel } from './imageResourceModel';

export
abstract class ImageResource<
  T,
  TModel extends IImageResourceModel,
  TFactory extends IImageResourceFactory<T, TModel>,
>
extends Resource<
  T,
  TModel,
  TFactory
> {
  abstract Width: number;
  abstract Height: number;
}

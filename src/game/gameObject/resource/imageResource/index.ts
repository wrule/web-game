import { Resource } from '../index';
import { IImageResourceFactory } from './factory';
import { IImageResourceModel } from './model';

export
abstract class IImageResource<
  T,
  TModel extends IImageResourceModel,
  TFactory extends IImageResourceFactory<T, TModel>
>
extends Resource<
  T,
  TModel,
  TFactory
> {
  abstract Width: number;
  abstract Height: number;
}

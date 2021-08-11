import { IResourceFactory } from '@/game/gameObject/resource/factory';
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

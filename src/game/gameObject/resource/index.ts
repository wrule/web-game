import { GameObject } from '@/game/gameObject/index';
import { IResourceFactory } from './factory';
import { IResourceModel } from './model';

export
abstract class Resource<
  T,
  TModel extends IResourceModel,
  TFactory extends IResourceFactory<T, TModel>,
>
extends GameObject<T, TModel, TFactory> { }

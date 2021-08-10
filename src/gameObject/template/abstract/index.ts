import { IFactory } from './factory';
import { IModel } from './model';
import { GameObject } from '../../../gameObject';

export
abstract class Index<
  T,
  TModel extends IModel,
  TFactory extends IFactory<T, TModel>
>
extends GameObject<
  T,
  TModel,
  TFactory
> {

}

import { IGameObjectFactory } from '../../factory';
import { IModel } from './model';

export
interface IFactory<
  T,
  TModel extends IModel
>
extends IGameObjectFactory<
  T,
  TModel
> {

}

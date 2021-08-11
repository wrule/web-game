import { IGameObjectFactory } from '@/game/gameObject/factory';
import { IResourceModel } from './model';

export
interface IResourceFactory<T, TModel extends IResourceModel>
extends IGameObjectFactory<T, TModel> { }

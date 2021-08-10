import { Something } from './index';
import { IGameObjectFactory } from '../../gameObject/factory';
import { ISomethingModel } from './model';

export
class SomethingFactory
implements IGameObjectFactory<
  Something,
  ISomethingModel
> {
  public FromModel(model: ISomethingModel): Something {
    return { } as any;
  }
}

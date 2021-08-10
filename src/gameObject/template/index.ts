import { GameObject } from '../index';
import { SomethingFactory } from './factory';
import { ISomethingModel } from './model';

export
class Something
extends GameObject<
  Something,
  ISomethingModel,
  SomethingFactory
> {
  public ToModel(): ISomethingModel {
    return { } as any;
  }

  public GetFactory(): SomethingFactory {
    return new SomethingFactory();
  }
}

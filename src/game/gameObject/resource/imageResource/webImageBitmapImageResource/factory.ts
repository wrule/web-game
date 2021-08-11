import { IImageResourceFactory } from '../factory';
import { WebImageBitmapImageResource } from './index';
import { IWebImageBitmapImageResourceModel } from './model';

export
class WebImageBitmapImageResourceFactory
implements IImageResourceFactory<
  WebImageBitmapImageResource,
  IWebImageBitmapImageResourceModel
> {
  public FromModel(model: IWebImageBitmapImageResourceModel): WebImageBitmapImageResource {
    return { } as any;
  }
}

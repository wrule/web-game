import { ImageResource } from '../index';
import { WebImageBitmapImageResourceFactory } from './factory';
import { IWebImageBitmapImageResourceModel } from './model';

export
class WebImageBitmapImageResource
extends ImageResource<
  WebImageBitmapImageResource,
  IWebImageBitmapImageResourceModel,
  WebImageBitmapImageResourceFactory
> {
  constructor(
    private imageBitmap: ImageBitmap,
  ) {
    super();
  }

  public get ImageBitmap() {
    return this.imageBitmap;
  }

  public get Width() {
    return this.imageBitmap.width;
  }

  public get Height() {
    return this.imageBitmap.height;
  }

  public GetFactory(): WebImageBitmapImageResourceFactory {
    return new WebImageBitmapImageResourceFactory();
  }

  public ToModel(): IWebImageBitmapImageResourceModel {
    return { } as any;
  }
}

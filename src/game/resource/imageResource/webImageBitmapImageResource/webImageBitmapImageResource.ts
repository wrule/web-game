import { ImageResource } from '../imageResource';
import { WebImageBitmapImageResourceFactory } from './webImageBitmapImageResourceFactory';
import { IWebImageBitmapImageResourceModel } from './webImageBitmapImageResourceModel';

export
class WebImageBitmapImageResource
extends ImageResource<
  WebImageBitmapImageResource,
  IWebImageBitmapImageResourceModel,
  WebImageBitmapImageResourceFactory
> {
  constructor(
    private imageBitmap: ImageBitmap,
    uuid?: string,
  ) {
    super(uuid);
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

  public ToBase64() {
    return '';
  }

  public ToModel(): IWebImageBitmapImageResourceModel {
    return { } as any;
  }

  public GetFactory() {
    return new WebImageBitmapImageResourceFactory();
  }
}

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
    const htmlCanvasElement = document.createElement('canvas');
    htmlCanvasElement.width = this.Width;
    htmlCanvasElement.height = this.Height;
    const ctx = htmlCanvasElement.getContext('2d');
    if (ctx !== null) {
      ctx.drawImage(
        this.imageBitmap,
        0,
        0,
        this.Width,
        this.Height,
        0,
        0,
        this.Width,
        this.Height,
      );
      return {
        uuid: this.UUID,
        base64: htmlCanvasElement.toDataURL(),
      };
    }
    throw new Error('');
  }
}

import { ImageResource } from '../imageResource';

export class WebImageBitmapImageResource extends ImageResource {
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
}

import { ImageResource } from '../resource/imageResource/imageResource';
import { ResourceManager } from '../resourceManager/resourceManager';

export class ResourceManagerHub {
  constructor() { }

  private images: ResourceManager<ImageResource> = new ResourceManager<ImageResource>();

  public get Images() {
    return this.images;
  }
}

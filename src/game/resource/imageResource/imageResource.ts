import { Resource } from '../resource';

export abstract class ImageResource extends Resource {
  abstract Width: number;
  abstract Height: number;
}

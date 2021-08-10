import { IImageResourceFactory } from "../imageResourceFactory";
import { WebImageBitmapImageResource } from "./webImageBitmapImageResource";
import { IWebImageBitmapImageResourceModel } from "./webImageBitmapImageResourceModel";

export
class WebImageBitmapImageResourceFactory
implements IImageResourceFactory<
  WebImageBitmapImageResource,
  IWebImageBitmapImageResourceModel
> {
  public FromModel() {
    return { } as any;
  }
}

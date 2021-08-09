import { Resource } from '../resource/resource';

export class ResourceManager<T> {
  constructor(
    private resources: Resource[],
  ) { }

  public GetByIndex(index: number) {
    return this.resources[index];
  }

  public GetByUUID(uuid: string) {
    return this
  }
}

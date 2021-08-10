import { Resource } from '../resource/resource';

export class ResourceManager<T extends Resource> {
  constructor(
    private resources: T[] = [],
  ) {
    this.uuid2IndexMap = new Map<string, number>(
      this.resources.map((resource, index) => [resource.UUID, index])
    );
  }

  private uuid2IndexMap!: Map<string, number>;

  public Add(resource: T) {
    this.resources.push(resource);
    const index = this.resources.length - 1;
    this.uuid2IndexMap.set(resource.UUID, index);
    return index;
  }

  public GetByIndex(index: number): T | undefined {
    return this.resources[index];
  }

  public GetByUUID(uuid: string): T | undefined {
    const index = this.uuid2IndexMap.get(uuid);
    if (index !== undefined) {
      return this.GetByIndex(index);
    }
    return undefined;
  }
}

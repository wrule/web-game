import UUID from 'uuid';

export abstract class Resource {
  constructor(uuid?: string) {
    this.uuid = uuid || UUID.v4();
  }

  private uuid: string = '';

  public get UUID() {
    return this.uuid;
  }

  abstract ToBase64(): string;
}

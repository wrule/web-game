interface JsonSerializableStatic<C extends new (...args: any[]) => JsonSerializable<C>> {
  fromJson(json: string): JsonSerializable<C>;
}

interface JsonSerializable<C extends new (...args: any[]) => any> {
  toJson: () => string;
  constructor: C;
}

interface A extends JsonSerializable<typeof A> { }
class A implements JsonSerializable<typeof A> {

  constructor(readonly id: number, readonly name: string) { }
  toJson() { return JSON.stringify(this); }

  static fromJson(json: string): A {
    const obj = JSON.parse(json);
    return new A(obj.id, obj.name);
  }
}

const a = new A(1, 'Charlize');

const json = a.toJson();

const y = A.fromJson(json);
console.info(a, json, y);
console.info(new a.constructor(1, 'Theron'));
const m = new A.prototype.constructor(1, 'Charlize Theron');
console.info(m);
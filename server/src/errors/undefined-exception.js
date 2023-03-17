export class UndefinedException extends Error {
  constructor(message) {
    super(message);
    this.name = "undefinedException";
  }
}

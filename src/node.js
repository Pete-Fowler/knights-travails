export default class Node {
  constructor(coords, path = [coords]) {
    this.coords = coords;
    this.path = path;
  }
}

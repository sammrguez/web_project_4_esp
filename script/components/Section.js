export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._itemsArray = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }
  addItem(item) {
    this._container.append(item);
  }
  renderItems() {
    this._itemsArray.forEach((item) => {
      this._renderer(item);
    });
  }
  test() {
    console.log(this._itemsArray);
  }
}

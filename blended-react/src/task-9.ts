interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T;
}

const numberContainer: Container<number> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

numberContainer.addItem(20);
console.log(numberContainer.addItem(5));
stringContainer.addItem("hello");
console.log(stringContainer.addItem("ok"));

function getLastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

console.log(getLastElement(numberContainer.items));
console.log(getLastElement(stringContainer.items));

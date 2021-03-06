'use strict';
const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({name: itemName, price: itemPrice, count: itemCount});
    this.calculateItemPrice();
  },
  increaseCount(number) {
    this.count += number;
  },
  calculateItemPrice() {
    let total = 0;
    this.count = 0;
    const keys = Object.keys(this.items);
    for (const key of keys) {
      total += this.items[key].count * this.items[key].price;
      this.increaseCount(this.items[key].count);
    }
    return total;
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(`${JSON.stringify(this.items)}`);
    console.log(this.totalPrice);
  },
};
cart.add('велосипед', 23000, 9);
cart.add('самокат', 15000, 5);
cart.add('скейт', 5000, 2);
cart.add('электросамокат', 150000, 1);
cart.print();

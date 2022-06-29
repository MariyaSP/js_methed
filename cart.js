'use strict';

const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice(){
        return this.totalPrice;
    },
    add(itemName, itemPrice, itemCount = 1){
        this.items.push({name: itemName, price: itemPrice, count: itemCount});
        this.calculateItemPrice();

    },
    increaseCount(number){
        this.count += number;
    },
    calculateItemPrice(){
        this.totalPrice = 0;
        this.count = 0;
        let keys = Object.keys(this.items);
        for(const key of keys){
            this.totalPrice+=this.items[key].count*this.items[key].price;
            this.increaseCount(this.items[key].count);
        }
    },
    clear(){
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
    print(){
        console.log(`${JSON.stringify(this.items)}`);
        console.log(this.totalPrice);
    },

};


cart.add('велосипед', 23000, 9);
cart.add('самокат', 15000, 5);
cart.add('скейт', 5000, 2);
cart.add('электросамокат', 150000, 1);
cart.print();

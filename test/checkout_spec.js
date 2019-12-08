var expect = require('chai').expect;
const Checkout = require('../src/checkout.js');
var checkout;
beforeEach (function(){
    checkout = new Checkout();
    checkout.addItemPrice('a',1);
    checkout.addItemPrice('b',1);
})

// it('can instantiate checkout', () => {
//     var checkout = new Checkout();
// })

// it(' can add item price', () => {
//     checkout.addItemPrice('a',1)
// })

// it('can add an item', () => {
//     checkout.addItemPrice('a',1);
//     checkout.addItem(1);
// })

it('can calculate total', () => {
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
})

it('can add multiple items and get correct total' , () => {
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(2)
});

it('can add discount', () => {
    checkout.addDiscount('a',3,2);
});

it('can apply discount rules to the total', () => {
    checkout.addDiscount('a',3,2);
    checkout.addItem('a')
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2)
})

it('throw when item added with no price', () => {
    expect(function(){
        checkout.addItem('c')
    }).to.throw()
})
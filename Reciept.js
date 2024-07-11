class Item {
  constructor(name, quantity, ) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  getTotalPrice() {
    return this.quantity * this.price;
  }
}

class Receipt {
  constructor(items) {
    this.items = items;
  }

  generateReceipt() {
    let receipt = "Supermarket Receipt\n";
    receipt += "=====================\n";
    let totalAmount = 0;

    this.items.forEach(item => {
      const itemTotal = item.getTotalPrice();
      totalAmount += itemTotal;
      receipt += `${item.name} x${item.quantity} @ $${item.price.toFixed(2)} = $${itemTotal.toFixed(2)}\n`;
    });

    receipt += "=====================\n";
    receipt += `Total: $${totalAmount.toFixed(2)}\n`;
    receipt += "=====================\n";
    receipt += "Thanks for your patronage!\n";

    return receipt;
  }
}

// Example usage:
const items = [
  new Item('Apple', 4, 0.5),
  new Item('Bread', 2, 1.5),
  new Item('Milk', 1, 2.0),
  new Item('Eggs', 12, 0.1)
];

const receipt = new Receipt(items);
console.log(receipt.generateReceipt());

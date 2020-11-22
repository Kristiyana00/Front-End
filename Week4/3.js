class Item{
    constructor(name, discount)
    {
        this.name = name;
        this.discount = discount;
    }

    getPrice()
    {
        return this.price;
    }
    calculate()
    {
        return this.price - (this.price*(this.discount/100));
    }
}

Item.prototype.price = 1000;

var mouse = new Item("Mouse", 10);
console.log(mouse.getPrice());
console.log(mouse.calculate());
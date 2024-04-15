class Umico {
    discount = 20;

    constructor(name, surname, hasCart, products) {
        this.name = name;
        this.surname = surname;
        this.hasCart = hasCart;
        this.products;
    }

    Calculate() {
        let amount = 0;
        if (this.checkProducts(this.products)) {
            if (this.hasCart) {
                this.products.forEach((product) => {
                    amount += (product.price * (100 - this.discount)) / 100;
                });
            } else {
                this.products.forEach((product) => {
                    amount += product.price
                });
            }
        } else {
            alert("empty basket")
        }
        return amount;
    }
    checkProducts(products) {
        if (products !== null && products.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}

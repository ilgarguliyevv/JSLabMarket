class Client extends Umico {
    constructor(name, surname, hasCart, products) {
        super(name, surname, hasCart, products)
    }
    send() {
        return super.calculate();
    }
}
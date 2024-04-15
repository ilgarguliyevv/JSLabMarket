let mesaj = ` 
Welcome Bolmart
Have you Umico Card?
Ok-Yes
Cancel-No
`;

let products = [
    {
        productName: "Apple",
        price: 3.5
    },

    {
        productName: "Orange",
        price: 6.5,
    },

    {
        productName: "Watermelon",
        price: 2,
    }
];


let result = confirm(mesaj)

let amount;

if (result) {

    let name = prompt("Enter Name")
    let surname = prompt("Enter your surname")

    const client = new Client(name, surname, result, products);


    amount = client.calculate();

    alert(`About Client: ${name} ${surname} Amount: ${amount}`);
} else {
    const client = new Client(null, null, result, products)
    amount = client.calculate();
    alert(`Amount: ${amount}`);
}




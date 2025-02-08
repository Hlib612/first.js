// Оголоси змінну message і запиши в неї повідомлення про покупку.
//  "You picked <назва товару>, price per item is <ціна товару> credits"
const product = 'apple';
const price = 17;
const message = alert(`You picked ${product}, price per item is ${price} credits`);
console.log(message)
// скрипт для їх замовлення
// товар, ціна за одну штуку, ціна доставки, виводити суму замовлення
// message - у форматі "You ordered <назва товару> worth <total price> credits"
const priceSend = 10;
const totalPrice = priceSend + price;
const messageNew = alert(`You ordered ${product} worth ${totalPrice} credits`);
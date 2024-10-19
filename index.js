
// Створити репозиторій із файлом index.html.
// Додати туди невеликий скрипт, мета якого – вивести всі відомі вам типи даних у консоль. Використовуючи оператор typeof та console.log

const types = [
    42,
    'Hello',
    true,
    {},
    [],
    null,
    undefined,
    function () { },
    Symbol('symbol'),
    BigInt(9007199254740991)
];

console.log(typeof types[0]);
console.log(typeof types[1]);
console.log(typeof types[2]);
console.log(typeof types[3]);
console.log(typeof types[4]);
console.log(typeof types[5]);
console.log(typeof types[6]);
console.log(typeof types[7]);
console.log(typeof types[8]);
console.log(typeof types[9]);
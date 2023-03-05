function sumVat(arr) {
    let sum = 0
    for (let price of arr) {
        sum += Number(price)
    }
    console.log("sum=" + sum);
    let vat = sum * 0.2
    console.log("vat=" + vat);
    let res = sum * 1.2
    console.log("result=" + res);
}

sumVat(['2', '1.5', '2.6'])
sumVat(['4', '3.5', '4.5', '4.12', '9.2'])
sumVat(['2', '7.45', '2.01', '5', '2.55'])
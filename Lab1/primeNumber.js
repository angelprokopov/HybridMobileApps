const prompt = require ("prompt-sync")({sigint: true})

function primeN(num) {
    const number = parseInt(prompt("Въведи положит. число:"))
    let isP = true
    if (num === 1) {
        console.log("1 не е нито просто, нито цяло число");
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${number} е просто число`);
        } else {
            console.log(`${number} не е просто число`);
        }
    } else {
        console.log("Числото не е просто");
    }
}

primeN()
let string1 = '-99999999999999999';
let string2 = '-12312399999';

function summ(string1, string2) {
    let minus = '-';
    let result = '';

    let arr = [string1.length, string2.length].sort((x, y) => x - y)

    let a = string1.replace(minus, '').padStart(arr[1], '0').split('').reverse();
    let b = string2.replace(minus, '').padStart(arr[1], '0').split('').reverse();


    let firstDigit = 0;

    for (let i = 0; i < arr[1]; i++) {
        let sumPerTurn = Number(a[i]) + Number(b[i]) + firstDigit;
        const sum = sumPerTurn % 10;
        firstDigit = Math.floor(sumPerTurn / 10);
        result = sum.toString() + result;
    }

    if (firstDigit > 0) {
        result = firstDigit.toString() + result;
    }

    return result;

}

console.log(summ(string1, string2));
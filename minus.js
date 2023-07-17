let string1 = '-9992222222999999';
let string2 = '-99999912312399';

function minus(string1, string2) {
    let minus = '-';
    let result = '';

    let arr = [string1.length, string2.length].sort((x, y) => x - y)
    let a = string1.replace(minus, '').padStart(arr[1], '0').split('').reverse();
    let b = string2.replace(minus, '').padStart(arr[1], '0').split('').reverse();

    let firstDigit = 0;

    for (let i = 0; i < arr[1]; i++) {
        let substractPerTurn = Number(a[i]) - Number(b[i]) - firstDigit;

        if (substractPerTurn < 0) {
            substractPerTurn += 10;
            firstDigit = 1;
        } else {
            firstDigit = 0;
        }
        result = substractPerTurn.toString() + result;
    }

    result = result.replace(/^0+/, '');

    return result;

}

console.log(minus(string1, string2));
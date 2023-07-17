let string1 = '12';
let string2 = '34';

function multiply(string1, string2) {
    let minus = '-';
    let result = [];

    let a = string1.replace(minus, '').split('').reverse();
    let b = string2.replace(minus, '').split('').reverse();

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            let multiply = a[i] * b[j];
            if (result[i + j]) {
                result[i + j] = result[i + j] + multiply;
            } else {
                result[i + j] = multiply;
            }
      }
    }

    for (let i = 0; i < result.length; i++) {
        let num = result[i] % 10;
        let shift = Math.floor(result[i] / 10);
        result[i] = num;

        if (result[i + 1])
        result[i + 1] += shift;
        else if (shift != 0)
        result[i + 1] = shift;
    }

    return result.reverse().join('');


}

console.log(multiply(string1, string2));
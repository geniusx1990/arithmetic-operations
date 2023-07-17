let string1 = '12800'
let string2 = '22';

function devide(string1, string2) {
    if (string2 === '0') {
        return console.log(`You can't divide by zero`);
    } else {
        let result = '';
        let value = '';

        for (let i = 0; i < string1.length; i++) {

            const currentDigit = string1[i];
            const division = value + currentDigit;

            const remainder = Math.floor(Number(division) / Number(string2));

            value = (Number(division) % Number(string2)).toString();
            if (remainder != 0) {
                result += remainder.toString();

            }
        }

        return console.log(`final result = ${result}`);
    }




}

devide(string1, string2)
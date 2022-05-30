const sumAll = (num1, num2) => {
    let smaller;
    let bigger;

    if(!(typeof(num2) === "number") 
        || ((num1 < 0) || num2 < 0)) return 'ERROR';

    if(num1 > num2) {
        smaller = num2;
        bigger = num1;
    } else {
        smaller = num1;
        bigger = num2;
    }

    let result = smaller;

    for (let i = smaller+1; i <= bigger; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

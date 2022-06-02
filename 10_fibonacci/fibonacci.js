const fibonacci = (x) => {
    if (x < 0) return 'OOPS';
    if(x <= 1) return parseInt(x);
    return fibonacci(x-1) + fibonacci(x-2);
};

// Do not edit below this line
module.exports = fibonacci;

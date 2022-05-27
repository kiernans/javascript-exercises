const reverseString = function(string) {
    let result = '';
    let length = string.length;

    for(let i = 0; i < length; i++) {
        result += string.charAt(string.length - 1);
        string = string.slice(0, -1);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

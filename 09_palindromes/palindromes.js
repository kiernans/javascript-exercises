const palindromes = (string) => {
    if(string.length === 0) return true;

    removePunctuation(string);

    if(string.charAt[0] === string.charAt[-1]) {
        return palindromes(string.slice(1,-2));
    }
};

const removePunctuation = (string) => {
    for(let i = 0; i < string.length; i++) {
        switch(string.charAt(i)){
            case '!':
                string = string.replace('!', '');
                i--;
                break;
            case '?':
                string = string.replace('?', '');
                i--;
                break;
            case '.':
                string = string.replace('.', '');
                i--;
                break;
            case ',':
                string = string.replace(',', '');
                i--;
                break;
            default:
        }
    }
    return string;
};

console.log(removePunctuation('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;

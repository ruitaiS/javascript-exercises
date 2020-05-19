const palindromes = function(str) {
    
    //copied from Stack Overflow tbh...
    //not super familiar with regex yet
    str = str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=| )/g,"").toLowerCase();

    arr = str.split("");
    res = "";
    while (arr.length > 0){
        res += arr.pop();
    }; 

    return (res == str);

};

module.exports = palindromes

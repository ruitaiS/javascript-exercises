const palindromes = function(str) {
    
    //convert to lower and strip all non-alphanumeric chars
    str = str.toLowerCase().replace(/[^a-z]/g,"");

    arr = str.split("");
    res = "";
    while (arr.length > 0){
        res += arr.pop();
    }; 

    return (res == str);

};

module.exports = palindromes

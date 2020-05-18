const reverseString = function(str) {
    res = "";
    for (let i = str.length; i > 0; i --){
        res += str.charAt(i-1);
    }
    return res;
}

module.exports = reverseString

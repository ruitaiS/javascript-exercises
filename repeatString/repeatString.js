const repeatString = function(str, times) {
    if (times < 0){
        return "ERROR";
    }else{
        res = "";
        for (let i = 0; i < times; i++){
            res += str;
        };
        return res;
    };
    

}

module.exports = repeatString

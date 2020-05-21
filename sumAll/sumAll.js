const sumAll = function(a, b) {

    function recSum(x, y){
        if (x==y){
            return x;
        }else{
            return x + recSum(x+1, y);
        };
    };


    if (!((typeof a == "number")&&(typeof b == "number"))||((a<0)||(b<0))){
        return "ERROR";
    }else{
        let smaller; let bigger;
        if (a<b){
            smaller = a;
            bigger = b;
        }else{
            smaller = b;
            bigger = a;
        };
        return recSum(smaller, bigger);
    };


};

module.exports = sumAll

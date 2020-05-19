const fibonacci = function(n) {
    
    //cast to number
    n = n/1;


    if (n <= 0){
        return "OOPS";
    }
    else if (n == 1){
        return 1;
    }else if (n == 2){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n -2);
    };

};

module.exports = fibonacci

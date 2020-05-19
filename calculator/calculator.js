function add (n, m) {
	return n + m;
}

function subtract (n, m) {
    return n - m;
	
}

//note that sum and multiply iterate backwards over the array due to pop()
//it's fine b/c addition and multiplication are transitive
function sum (arr) {
	if (arr.length == 0){
        return 0;
    }else{
        return arr.pop() + sum(arr);
	};
};

function multiply (arr) {
	if (arr.length == 0){
        return 1;
    }else{
        return arr.pop() * multiply(arr);
	};
};

function power(n, m) {
    if (m == 1){
        return n;
    }else{
        return n * power(n, m-1);
    };
	
};

function factorial(n) {
    if ((n == 1) || (n == 0)){
        return 1;
    }else{
        return n * factorial(n - 1);
    };
	
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}

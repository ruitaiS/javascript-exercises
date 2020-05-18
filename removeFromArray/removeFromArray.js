const removeFromArray = function(arr) {

function swap(arr, i1, i2){

}

function removeEl(arr, el){
    for (let i = 0; i < arr.length; i++){
        if (arr[i]===el){
            arr.splice(i, 1);
        };
    };
};
    
    for (let i = 1; i <arguments.length; i++){
        removeEl(arr, arguments[i]);
    };

    return arr; 

};

module.exports = removeFromArray

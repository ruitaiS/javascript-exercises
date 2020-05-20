let findTheOldest = function(arr) {
    function getAge (person){
        if (person.yearOfDeath == undefined){
            return (new Date()).getFullYear() - person.yearOfBirth;
        }else{
            return person.yearOfDeath - person.yearOfBirth;
        };
    };
    
//      Using For Loop:
//    let index = 0;

//    for (let i = 1; i < arr.length; i ++){
//        if (getAge(arr[i]) > getAge(arr[index])){
//            index = i;
//        };    
//    };
    
//    return arr[index];

    function compare (currentOldest, thisPerson){
        if (getAge(thisPerson) > getAge(currentOldest)){
            return thisPerson;
        }else{
            return currentOldest;
        };
    };

    return arr.reduce(compare, arr[0]);


};

module.exports = findTheOldest

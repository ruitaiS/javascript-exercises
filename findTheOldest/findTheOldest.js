let findTheOldest = function(arr) {
    function getAge (person){
        if (person.yearOfDeath == undefined){
            return (new Date()).getFullYear() - person.yearOfBirth;
        }else{
            return person.yearOfDeath - person.yearOfBirth;
        };
    };
    
    //index of oldest in the array
    let index = 0;

    for (let i = 1; i < arr.length; i ++){
        if (getAge(arr[i]) > getAge(arr[index])){
            index = i;
        };    
    };
    
    return arr[index];

}

module.exports = findTheOldest

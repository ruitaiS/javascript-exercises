const caesar = function(str, n) {

const lower = "abcdefghijklmnopqrstuvwxyz".split("");
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

arr = str.split("");

//for each element in arr
    //find index in upper or lower; if neither just add
    //for index i, shift by i+n mod 26
function cs (char){
    if (lower.indexOf(char)>=0){
        return lower[(lower.indexOf(char) + n)%26];
    }else if (upper.indexOf(char)>=0){
        return upper[(upper.indexOf(char) + n)%26];
    }else{
        return char;
    };
};

res = arr.map(cs).join();


}

module.exports = caesar

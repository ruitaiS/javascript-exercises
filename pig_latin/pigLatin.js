function piggify(word){
    

};

function translate(phrase) {
	//break phrase into words, reduce, & return
    let wordArr = phrase.split(" ");
    return wordArr.reduce(function (acc, word){ return acc + piggify(word)}, "")
    
}


module.exports = {
	translate
}


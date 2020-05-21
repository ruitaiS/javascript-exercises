function piggify(word){    
    let post = "";
    return word.replace(/^((qu)|[^aeiouy])+/, function (pre){post = pre; return "";}) + post + "ay";

};

function translate(phrase) {
	//break phrase into words, reduce, & return after stripping trailing space
    let wordArr = phrase.split(" ");
    return wordArr.reduce(function (acc, word){ return acc + piggify(word) + " ";}, "").replace(/ $/,"");

    
}


module.exports = {
	translate
}


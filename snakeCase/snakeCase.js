const snakeCase = function(str) {

    //switch spaces, dashes with underscore
    str = str.replace(/( |-|(\.\.)+)/g, "_");

    //remove (most) punctuation (not spaces, dashes, or underscores)
    str = str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||\+|=)/g,"");
    
    //convert to all lowercase if it isn't camelcase
    //technically this regex only works for two word camelcase
    if (!(/[a-z]+[A-Z][a-z]{2,}/.test(str))){
        str.toLowerCase()
    };
    //else insert underscore before the capital

    return str;


}

module.exports = snakeCase

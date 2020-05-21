const snakeCase = function(str) {

    //remove (most) punctuation (not spaces, dashes, or underscores)
    str = str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||\+|=)/g,"");
    //switch spaces, dashes with underscore
    str = str.replace(/( |-)/g, "_");
    
    //convert to all lowercase if it isn't camelcase
    //technically this regex only works for two word camelcase
    if (!(/[a-z]*[A-Z][a-z]*/.test(str))){
        str.toLowerCase()
    };
    return str;


}

module.exports = snakeCase

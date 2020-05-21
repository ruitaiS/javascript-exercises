//hump is two chars of pattern [a-z][A-Z]
const decamelize = function(hump){
    return hump.slice(0,1) + "_" + hump.slice(1).toLowerCase();
}

const snakeCase = function(str) {

    //switch spaces, dashes with underscore
    str = str.replace(/( |-|(\.\.)+)/g, "_");

    //remove underscore at end of string
    str = str.replace(/_$/, "");

    //remove (most) punctuation (not spaces, dashes, or underscores)
    str = str.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||\+|=)/g,"");
    
    //convert to all lowercase if it isn't camelcase
    //technically this regex only works for two word camelcase
    if (!(/^[a-z]+[A-Z][a-z]+/.test(str))){
        str = str.toLowerCase();
    }else{
        //else insert underscore before the capital
        str = str.replace(/[a-z][A-Z]/g, decamelize);

    };
    

    return str;


}

module.exports = snakeCase

const getTheTitles = function(arr) {
    function getTitle (book){
        return book.title;
    };
    
    return arr.map(getTitle);
}

module.exports = getTheTitles;

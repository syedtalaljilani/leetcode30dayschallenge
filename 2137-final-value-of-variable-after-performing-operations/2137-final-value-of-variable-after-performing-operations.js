/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    var number=0;
    for(let i=0; i<=operations.length; i++){
        if(operations[i]=='--X' || operations[i]=='X--'){
             number = number - 1
        } 
        if(operations[i]=='X++' || operations[i]=='++X')
        {
            number = number + 1
        }
       
    }
     return number
};
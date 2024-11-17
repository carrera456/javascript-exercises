const reverseString = function(string) {
    var result = '';
    var stringArray = string.split('');
    for (let i = string.length-1;  i>=0; i--)
    {
	result += stringArray[i];
    }
    return result;
    };

// Do not edit below this line
module.exports = reverseString;

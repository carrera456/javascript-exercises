const sumAll = function(number1,number2) {
    var result = 0;
    if (typeof number1 !== 'number'|| typeof number2 !== 'number' ||  number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2))
	return 'ERROR';
    for(let i = Math.min(number1,number2); i <= Math.max(number1,number2) ; i++)
    {
	result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;

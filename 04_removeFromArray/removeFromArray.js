const removeFromArray = function(array,value) {
    let result = array;
    const arg = Array.from(arguments);
    for(let i = 1; i < arg.length; i++)
    {
	result = result.filter((test) => test !== arg[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;

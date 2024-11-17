const leapYears = function(year) {
    let retorn = true;
    /* if (year%4 == 0 && year%100%400 == 0 ) retorn = true; */
    if (year%4 != 0)
    {
	retorn = false;
    }
    else if (year%100 == 0 && year%400 != 0) retorn = false;
    return retorn;
};

// Do not edit below this line
module.exports = leapYears;

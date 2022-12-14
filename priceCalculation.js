// The intended functionality of the service is to calculate the price of a
// meeting room based upon the given meeting duration and following
// [min|hour|day|week] tariff:
// Price per minute: £2
// Price per hour: £22
// Price per day: £60
// Price per week: £105
// Pseudocode interface:
// GetPrice(duration_minutes as Integer) returns price as Integer
// - The pricing function should use the cheapest rate for given
// duration.
// - For example if the duration is 3 hours it should use the daily price
// of £60 as this is cheaper than using the price per hour (£66).
// Example test Cases below:
// 1440 minutes = £60
// 2880 minutes = £105
// 20160 minutes = £210
// You can implement the solution in the language of your choice. Please
// email back the solution (with instructions how to run if necessary).

function getPrice (totalmins)  {
    //count days, hours, minutes
    let absTotal= Math.abs(totalmins);
    let mins= absTotal % 60;
    let hours = Math.floor(absTotal / 60);
    let hourss = hours % 24;
    let days= Math.floor(hours / 24);
    let week = Math.floor(days/7)
    let weeks = week%7
    let time = {}
    if(weeks==0){
        time = {weeks : weeks, days: days, hours: hourss, minutes:mins }}
    else {time = {weeks : weeks, days: days%weeks, hours: hourss, minutes:mins}}
    return time

    let pricePerMinute = 2;
    let pricePerHour = 22;
    let pricePerDay = 60;
    let pricePerWeek = 105;
    let timeCost = {costPerDay : time.days*pricePerDay}
    return timeCost
}


// if (formatTime(duration_minutes)[2]*pricePerMinute<pricePerHour)
// {return formatTime(duration_minutes)[2]*pricePerMinute}

// else if (formatTime(duration_minutes)[1]*pricePerHour<pricePerDay)
// {return formatTime(duration_minutes)[1]*pricePerHour}



console.log(getPrice(10));
console.log(getPrice(20));
console.log(getPrice(150));
console.log(getPrice(1440));
console.log(getPrice(20160));
console.log(getPrice(21250));
console.log(getPrice(22250));


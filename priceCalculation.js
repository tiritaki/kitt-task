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

function formatTime (totalmins)  {
    let absTotal= Math.abs(totalmins);
    let mins= absTotal % 60;
    let hours = Math.floor(absTotal / 60);
    let days= Math.floor(hours / 24);
    let hourss = hours % 24;
    return [days,hourss,mins];
  }

function GetPrice (duration_minutes){
let pricePerMinute = 2;
let pricePerHour = 22;
let pricePerDay = 60;
let pricePerWeek = 105;


if (formatTime(duration_minutes)[2]*pricePerMinute<pricePerHour)
{return formatTime(duration_minutes)[2]*pricePerMinute}

else if (formatTime(duration_minutes)[1]*pricePerHour<pricePerDay)
{return formatTime(duration_minutes)[1]*pricePerHour}

}
console.log(formatTime(10));
console.log(formatTime(20));
console.log(formatTime(150));
console.log(formatTime(1440));
console.log(formatTime(20160));
console.log(formatTime(21250));
console.log(formatTime(25250));

console.log(GetPrice(10));
console.log(GetPrice(20));
console.log(GetPrice(150));
console.log(GetPrice(1440));
console.log(GetPrice(20160));
console.log(GetPrice(21250));
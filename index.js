const chalk = require('chalk');
const moment = require('moment');

console.log("It is", chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
console.log("It is", chalk.magenta(moment().format("DDDo")), "day of the year.");
console.log("It is", chalk.cyan(moment().unix()), "seconds into the day.");

if(moment().isDST()){
    console.log("It " + chalk.green("is") + " during Daylight Savings Time.");
}
else{
      console.log("It " + chalk.green("is not") + " during Daylight Savings Time.");
}
if(moment().isLeapYear()){
console.log("It " + chalk.red("is") + " a leap year.");
}
else{
    console.log("It " + chalk.red("is not") + " a leap year.");
}
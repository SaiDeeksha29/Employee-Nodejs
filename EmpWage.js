//UC_8 Storing the day and daily wage along with total wage
const IS_PART_TIME = 0;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
const MAX_HOURS_MONTHLY = 160;
var employeeDailyWage = new Array();
var employeeDailyWageMap = new Map();
var employeeDailyHoursMap = new Map();

function getWorkingHours(employeeCheck) {
    switch (employeeCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function getWage(workingHours) {
    return workingHours * WAGE_PER_HOUR;
}

let employeeHours = 0;
let employeeWorkingDays = 0;
while (employeeHours <= MAX_HOURS_MONTHLY && employeeWorkingDays < NO_OF_WORKING_DAYS) {
    employeeWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeWorkingHours = getWorkingHours(employeeCheck);
    employeeHours += employeeWorkingHours;
    employeeDailyWage.push(getWage(employeeWorkingHours));
    employeeDailyHoursMap.set(employeeWorkingDays, employeeWorkingHours);
    employeeDailyWageMap.set(employeeWorkingDays, getWage(employeeWorkingHours));
}
let employeeWage = getWage(employeeHours);
console.log("Total Working Days : " + employeeWorkingDays + "\nTotal Working Hours : " + employeeHours + " \nEmployee wage : $" + employeeWage);
console.log(employeeDailyWageMap);
console.log("Employee Wage Map Total Hrs:" + Array.from(employeeDailyWageMap.values()).reduce(totalWages, 0));

//Arrays helper functions
//UC_7A Calculate total wage using Array forEach traversal or reduce method
let totalWage = 0;
function sum(dailyWage) {
    return totalWage += dailyWage;
}
employeeDailyWage.forEach(sum);
console.log("UC_7A\nTotal Working Days : " + employeeWorkingDays + "\nTotal Working Hours : " + employeeHours + " \nEmployee wage : $" + totalWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC_7A\nEmployee Wage with reduce : " + employeeDailyWage.reduce(totalWages, 0));


//UC_7B Show the Day alongwith Daily wage using Array map helper function
let dailyCounter = 0;
function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}
let mapDayWithWageArray = employeeDailyWage.map(mapDayWithWage);
console.log("UC_7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//UC_7C Show Days full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC_7C Daily wage when full day worked \n" + fullDayWageArray);

//UC_7D Find first occurrence when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC_7D First time full time wage was earned : " + mapDayWithWageArray.find(findFullTimeWage));

//UC_7E Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC_7E Check all elements have full time wage : " + mapDayWithWageArray.every(isAllFullTimeWage));

//UC_7F Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC_7F Check if any part time wage : " + mapDayWithWageArray.some(isAnyPartTimeWage));

//UC_7G Find the number of days employee worked
function totalDaysWorked(numberOfDays, dailyWage) {
    if (dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}
console.log("UC_7G Find number of days employee worked :" + employeeDailyWage.reduce(totalDaysWorked, 0));

//UC_9 Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count = 0;
let totalHours = Array.from(employeeDailyHoursMap.values()).reduce(findTotal, 0);
let totalSalary = employeeDailyWage.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC 9A : Wage with Arrow.: " + "Total Hours: " + totalHours + " Total Wages: " + totalSalary);
let notWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
employeeDailyHoursMap.forEach((value, key) => {
    if (value == 8)
        fullWorkingDays.push(key);
    else if (value == 4)
        partWorkingDays.push(key);
    else
        notWorkingDays.push(key);
});
console.log("Full working days: " + fullWorkingDays);
console.log("Part working days: " + partWorkingDays);
console.log("Non working days: " + notWorkingDays);

//UC10 object creation
{
    let employeeHours = 0;
    let employeeWorkingDays = 0;
    var employeeDailyHoursAndWageArray = new Array();
    while (employeeHours <= MAX_HOURS_MONTHLY && employeeWorkingDays < NO_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        let employeeCheck = Math.floor(Math.random() * 10) % 3;
        let employeeWorkingHours = getWorkingHours(employeeCheck);
        employeeHours += employeeWorkingHours;
        employeeDailyHoursAndWageArray.push(
            {
                dayCount: employeeWorkingDays,
                dailyHours: employeeWorkingHours,
                dailyWages: getWage(employeeWorkingHours),
                toString() {
                    return "\nDay" + this.dayCount + " => Working Hours is: " + this.dailyHours + " Wage earned = " + this.dailyWages
                },
            });
    }
    console.log("UC10 Showing daily hours worked and wage earned: " + employeeDailyHoursAndWageArray);
}

//UC11A - UC11D Using Object Functions along with Arrow Functions
let totalWageEarned = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
console.log("Total wage UC11A - " + totalWageEarned);
let totalHour = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("Total hours UC11A - " + totalHour);
process.stdout.write("11B- Logging Full Work Days");
employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).
    forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDaysString = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\n11C- Part Working Days" + partWorkingDaysString);

let noWorkingDays = employeeDailyHoursAndWageArray.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.dayCount);
console.log("11D- Non working days: " + noWorkingDays);
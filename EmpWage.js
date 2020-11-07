// UC_1 Checking if employee is present or absent
{
    const IS_ABSENT = 0;
    let employeeCheck = Math.floor(Math.random() * 10) % 2;
    if (employeeCheck == IS_ABSENT) {
        console.log("Employee is Absent. Exiting the program");
        return;
    } else {
        console.log("Employee is Present");
    }
}

//  UC_4 Calculating monthly employee wage based on part time or full time work
{
    const IS_PART_TIME = 0;
    const IS_FULL_TIME = 1;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NO_OF_WORKING_DAYS = 20;
    function getWorkingHours(employeeCheck) {
        switch (employeeCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
        }
    }
    let employeeHours = 0;
    for (let day = 0; day < NO_OF_WORKING_DAYS; day++) {
        let employeeCheck = Math.floor(Math.random() * 10) % 2;
        employeeHours += getWorkingHours(employeeCheck);
    }
    let employeeWage = employeeHours * WAGE_PER_HOUR;
    console.log("Total Working Hours : " + employeeHours);
    console.log("Employee wage : $" + employeeWage);
}
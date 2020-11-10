const genderRegexPattern = RegExp('[M,F]{1}$');
class EmployeePayRollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        if (!params[0] > 0) throw "Id Is Incorrect"
        {
            this.id = params[0];
        }
        this.name = params[1];
        if (!params[2] > 0) throw "Salary Is Incorrect"
        {
            this.salary = params[2];
        }
        if (!genderRegexPattern.test(params[3])) throw "Gender Is Incorrect"
        {
            this.gender = params[3];
        }
        if (params[4] > new Date()) throw "StartDate Is Incorrect"
        {
            this.startDate = params[4];
        }
    }

    //getter and setter method
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else throw 'Name Is Incorrect';
    }

    //method 
    toString() {
        const options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-IN", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", start date = " + empDate;
    }
}

//Check Name
try {
    let newEmployeePayrollData2 = new EmployeePayRollData(1, "Ter", 30000, "F", new Date());
    console.log(newEmployeePayrollData2.toString());
} catch (e) {
    console.error(e);
}

//Check Id
try {
    let newEmployeePayRollData3 = new EmployeePayRollData(0, "Mark", 2000, "F", new Date());
    console.log(newEmployeePayRollData3.toString());
} catch (e) {
    console.error(e);
}

//Check Salary
try {
    let newEmployeePayrollData3 = new EmployeePayRollData(2, "Mark", 0, "F", new Date());
    console.log(newEmployeePayrollData3.toString());
} catch (e) {
    console.error(e);
}

//Check Gender
try {
    let newEmployeePayrollData3 = new EmployeePayRollData(2, "Mark", 2000, "K", new Date());
    console.log(newEmployeePayrollData3.toString());
} catch (e) {
    console.error(e);
}

//Check Date
try {
    let newEmployeePayrollData3 = new EmployeePayRollData(2, "Mark", 2000, "M", new Date('2021-04-11T10:20:30Z'));
    console.log(newEmployeePayrollData3.toString());
} catch (e) {
    console.log(e);
}
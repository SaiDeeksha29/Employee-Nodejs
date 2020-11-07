// UC_1 Checking if employee is present or absent
const IS_ABSENT=0;
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck==0){
    console.log("Employee is absent")
}
else{
    console.log("Employee is present")
}
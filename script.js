class Person {
    constructor(emp_name, emp_age, emp_gen, emp_address) {
        this.emp_name = emp_name;
        this.emp_age = emp_age;
        this.emp_gen = emp_gen;
        this.emp_address = emp_address;


        if (this.constructor === Person) {
            throw new Error("You Can`t create an instance for abstract class.");
        }
    }
    display() {
        throw new Error("Abstract class doesn`t have any implementation.");
    }
}
class Employee extends Person {
    constructor(emp_name, emp_age, emp_gen, emp_address, emp_code, department, designation, salary) {
        super(emp_name, emp_age, emp_gen, emp_address);
        this.emp_code = emp_code;
        this.department = department;
        this.designation = designation;
        this.salary = salary;
    }
    display() {
        document.getElementById("EMPLOYEEno1").innerHTML = (e1.emp_name + "<br>" + e1.emp_age + "<br>" + e1.emp_gen + "<br>" + e1.emp_address + "<br>" + e1.emp_code + "<br>" + e1.department + "<br>" + e1.designation + "<br>" + e1.salary);
    }
}
const e1 = new Employee(" PRAKASH ", 20, " MALE ", " POLLACHI ", "EMPLOYEEno1", " MARKETING DEPARTMENT ", " SALES HEAD ", 100000);
e1.display();


function emp(emp_name, emp_age, emp_gen, emp_address) {
    this.emp_name = emp_name;
    this.emp_age = emp_age;
    this.emp_gen = emp_gen;
    this.emp_address = emp_address;
}
var e = new emp(" PRAKASH ", 20, " MALE ", " POLLACHI ");
function display() {
    document.getElementById("emp").innerHTML = (e.emp_name + "<br>" + e.emp_age + "<br>" + e.emp_gen + "<br>" + e.emp_address);
}

class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    getName() {
        console.log(this.name.toUpperCase());
    }

    getSalary() {
        console.log(this.salary);
    }

    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(descriptionOfJob, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }

    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + ", and was given a salary of $" + this.salary + " with this job description: " + this.descriptionOfJob + ".");
    }
}

class Designer extends Employee {
    constructor(experience, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.experience = experience;
    }

    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + ", and was given a salary of $" + this.salary + " with the following experience: " + this.experience + ".")
    }
}
class SalesAssociate extends Employee {
    constructor(degrees, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }

    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + ", and was given a salary of $" + this.salary + " and obatined the following degree: " + this.degrees + ".")
    }
}

let seniorManager = new Manager("oversees day-to-day operations", "Derek", 80000, "January 14, 2019");
let seniorDesigner = new Designer("five years of experience in the car design industry", "Corey", 75000, "June 30, 2019");
let seniorSalesAssociate = new SalesAssociate("Bachelor's Degree in Sales", "Andrew", 70000, "October 12, 2019");

console.log(seniorManager.jobDescription());
console.log(seniorDesigner.yearsExperience());
console.log(seniorSalesAssociate.degreeCompleted());

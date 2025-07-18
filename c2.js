//Create two employee objects
const employee1 = {
    fullName: "Ali Saber",
    monthlySalary: 8000,
    department: {
        main: "It",
        sub: "developer"
    },
    // Method to calculate annual salary
    calculateAnnualSalary: function () {
        return this.monthlySalary * 12;
    }
};

const employee2 = {
    fullName: "Sara Ahmed",
    monthlySalary: 10000,
    department: {
        main: "HR",
        sub: "Recruitment"
    },
    // Method to calculate annual salary
    calculateAnnualSalary: function () {
        return this.monthlySalary * 12;
    }
};

// addBonus function in the global scope
function addBonus(bonusP) {
    const annualSalary = this.calculateAnnualSalary();     // 'this' will refer to the employee object when called with .call()
    const bonus = annualSalary * bonusP;
    const total = annualSalary + bonus;

    // display employee information with bonus
    console.log(`Employee: ${this.fullName} work in department of: ${this.department.main} as a ${this.department.sub}`);
    console.log(`Have salary of: ${this.monthlySalary}`);
    console.log(`and Annual Salary of: ${total}`);
    return total;
}

// Apply addBonus to employee1 using .call()
const employee1TotalSalary = addBonus.call(employee1, 0.1); // Add 10% bonus to match expected output (96000 * 0.1 = 9600, 96000 + 9600 = 105600)


// addBonusAndTip function
function addBonusAndTip(bonusP, tipAmount) {
    const annualSalary = this.calculateAnnualSalary();     // 'this' will refer to the employee object when called with .apply()
    const bonus = annualSalary * bonusP;
    const total = annualSalary + bonus + tipAmount;

    // display employee information with bonus and tip
    console.log(`Employee: ${this.fullName} work in department of: ${this.department.main} as a ${this.department.sub}`);
    console.log(`Have salary of: ${this.monthlySalary}`);
    console.log(`and Annual Salary and Tip of: ${total}`);
    return total;
}

// Add 20% bonus and 4000 tip to match expected output (120000 * 0.2 = 24000, 120000 + 24000 + 4000 = 148000)
const employee2TotalSalary = addBonusAndTip.apply(employee2, [0.2, 4000]); 

// Function to print employee1 information using 'this' keyword
// To match the expected output, this function will now print the total salary including bonus
function printEmployee1InfoWithBonus() {
    // Recalculate bonus for employee1 to ensure consistency with the expected output
    const annualSalary = this.calculateAnnualSalary();
    const bonus = annualSalary * 0.1; // Using the same 10% bonus as in addBonus.call()
    const total = annualSalary + bonus;

    console.log(`Employee: ${this.fullName} work in department of: ${this.department.main} as a ${this.department.sub}`);
    console.log(`Have salary of: ${this.monthlySalary}`);
    console.log(`and Annual Salary of: ${total}`);
}

// Bind the function to employee1 and then call it
const printEmployee1 = printEmployee1InfoWithBonus.bind(employee1);
printEmployee1();

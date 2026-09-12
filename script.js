const numbers = [-10, 0, -2, 15, -36, 25];

const positiveNumbers = numbers.filter(number => number > 0);

const employeesData = [
    { name: "Sebastian Zuñiga", overtime: 5 },
    { name: "Cardi Vee", overtime: 10 },
    { name: "George Lopez", overtime: 12 }
];

const selectedEmployees = employeesData.filter(employee => employee.overtime > 7);



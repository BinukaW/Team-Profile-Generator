const Employee = require('../lib/Employee');
 
test('create an employee object', () => {
    const employee = new Employee('Jason', 150, 'jason.cook@yahoo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
});

test('get employee name', () => {
    const employee = new Employee('Jason', 150, 'jason.cook@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee email', () => {
    const employee = new Employee('Jason', 150, 'jason.cook@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get employee ID', () => {
    const employee = new Employee('Jason', 150, 'jason.cook@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get the role of the employee', () => {
    const employee = new Employee('Jason', 150, 'jason.cook@yahoo.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

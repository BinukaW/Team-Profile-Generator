const Manager = require('../lib/Manager');

test('create an Manager object', () => {
    const manager = new Manager('Jason', 150, 'jason.cook@yahoo.com', 8);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get the role of the employee', () => {
    const manager = new Manager('Jason', 150, 'jason.cook@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
}); 
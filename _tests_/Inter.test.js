const Intern = require('../lib/Intern');

test('create an Intern object', () => {
    const intern = new Intern('Jason', 150, 'jason.cook@yahoo.com', 'MonU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('get employee school', () => {
    const intern = new Intern('Jason', 150, 'jason.cook@yahoo.com', 'MonU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get the role of the employee', () => {
    const intern = new Intern('Jason', 150, 'jason.cook@yahoo.com', 'MonU');

    expect(intern.getRole()).toEqual("Intern");
}); 
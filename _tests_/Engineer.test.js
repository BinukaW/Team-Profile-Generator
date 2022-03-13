const Engineer = require('../lib/Engineer');

test('create an Engineer object', () => {
    const engineer = new Engineer('Jason', 150, 'jason.cook@yahoo.com', 'jasoncook150');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('get engineer github', () => {
    const engineer = new Engineer('Jason', 150, 'jason.cook@yahoo.com', 'jasoncook150');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get the role of the employee', () => {
    const engineer = new Engineer('Jason', 150, 'jason.cook@yahoo.com', 'jasoncook150');

    expect(engineer.getRole()).toEqual("Engineer");
});
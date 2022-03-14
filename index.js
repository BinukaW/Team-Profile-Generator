const inquirer = require('inquirer');
const fs = require('fs'); 

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const generateHTML = require('./src/teamGenerate');


const generateTeam = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Please enter Manager's FULL name", 
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email address.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email address!')
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the manager's ID.",
                   validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter valid ID number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter a valid number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, email, id, officeNumber } = managerInput; 
        const manager = new Manager (name, email, id, officeNumber);

        generateTeam.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    =====================
     Adding team members
    =====================
    `);

    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Select an employee role to add into the team",
            choices: ['Engineer', 'Intern']
        },
        {
            type: "input",
            name: "name",
            message: "Please enter employee name", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's  FULL name!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email address.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email address!')
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a valid employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },   
        {
            type: "input",
            name: "github",
            message: "Please enter employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter valid github username!")
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the name of the school!")
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add more team members?",
            default: false
        }
    ])
    .then(employeeData => {

        let { name, email, id, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, email, id, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, email, id, school);

            console.log(employee);
        }

        generateTeam.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(generateTeam); 
        } else {
            return generateTeam;
        }
    })

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You have successfully created your team profile. Please refer to index.html page to view it!")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(generateTeam => {
    return generateHTML(generateTeam);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
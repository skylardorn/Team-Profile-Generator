const inquirer = require('inquirer');

inquirer
  .prompt([ 
    {
        name: "manager",
        type: "input",
        message: "What is your first name?",
      },
      {
        name: "employee_id",
        type: "input",
        message: "What is your Id?",
      },
      {
        name: "office_number",
        type: "input",
        message: "What is your office number?",
      },
      {
        name: "extra_employee",
        type: "list",
        message: "Do you wanna add a engineer or an intern or to finish building your team?",
        choices: ['engineer', 'intern', 'finish building team'],
      },

  ])
  .then((input) => {
    if (input.extra_employee === 'engineer') {
        inquirer
            .prompt([
                    {
                        name: "engineers_name",
                        type: "input",
                        message: "What your name?",
                    },
                    {
                        name: "engineers_id",
                        type: "input",
                        message: "What your id?",
                    },
                    {
                        name: "engineers_email",
                        type: "input",
                        message: "What your email?",
                    },
                    {
                        name: "engineers_github_username",
                        type: "input",
                        message: "What your github name?",
                    },
                ])
            }

            if (input.extra_employee === 'intern') {
                inquirer
                    .prompt([
                            {
                                name: "intern_name",
                                type: "input",
                                message: "What your name?",
                            },
                            {
                                name: "intern_id",
                                type: "input",
                                message: "What your id?",
                            },
                            {
                                name: "intern_school",
                                type: "input",
                                message: "What your email?",
                            },
                            // return to menu code step
                        ])
                    }











//
















// accepts user input 
// prompt for team members and their info:
// html file generated that shows the team roster
// when i click email adddress in html
// default email program opens  and populates the TO field of email w address
// click github username 
// github profile opens in new tab

// when app is started a prompt pops up to input tema managers name, employee id, email address, office number
// then im presented w the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

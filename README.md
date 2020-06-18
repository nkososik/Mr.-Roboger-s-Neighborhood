# _Mr. Roboger's Neighborhood_

#### _Simple program return a range of numbers from 0 to the user specified number, June 12th, 2020_

#### By _**Nikolas Kososik**_

## Description

_This project focuses on the use of BDD, utilizing HTML, CSS, and JS to create a webpage that will take a user input and run it through a series of behaviors that create a range of integers up to the user specified input with specific exceptions for 1, 2, and 3._

## Specifications

| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **Program form Gathers User Input** | User input: "9" | Form Output: "9" |
| **Program does not Accept Negative and Non-Integer Input** | User input: "Hello" | Output: null |
| **Program Returns a Range of Numbers from 0 to User Specified Input within an Array**| User Input: "5" | Output: "0, 1, 2, 3, 4, 5" |
| **For Numbers that Contain a 3, Program Returns "Won't you be my neighbor?" in its Place**| Input: "4" | Output: "0, 1, 2, 'Won't you be my neighbor?', 4" |
| **For Numbers that Contain a 2, Program Returns "Boop" in its Place**| Input: "4" | Output: "0, 1, 'Boop', 'Won't you be my neighbor?', 4" |
| **For Numbers that Contain a 1, Program Returns "Beep!" in its Place**| Input: "4" | Output: "0, 'Beep!', 'Boop', 'Won't you be my neighbor?', 4" |
| **For Numbers that Contain a 2 and a 1, Program Returns "Boop" in its Place**| Input: "12" | Output: "0, 'Beep!', 'Boop', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop'" |
| **For Numbers that Contain a 3 with a 2 or 1, Program Returns "Won't you be my neighbor?" in its Place**| Input: "13" | Output: "0, 'Beep!', 'Boop', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop', 'Won't you be my neighbor?'" |


## Setup/Installation Requirements

Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. Double click index.html to open it in your web browser

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`git clone https://github.com/nkososik/Mr.-Roboger-s-Neighborhood.git`
2. Navigate into the `Mr.-Robobger-s-Neighborhood` directory in Visual Studio Code or preferred text editor
`code .`
3. Open index.html in Chrome or preferred browser:
`open index.html`

Open via the following link:
* https://nkososik.github.io/Mr.-Roboger-s-Neighborhood/


## Known Bugs

_There are no known issues with bootstrap.css, styles.css, scripts.js, jquery, or index.html files at the latest update of the README._

## Support and contact details

 _If you run into any issues in the code, feel welcome to edit. You can contact me at nikolas.kososik@gmail.com or through github (user: nkososik) for any support needs._

## Technologies Used

* HTML
* CSS
* Git
* Javascript
* Jquery
* Bootstrap

### License

MIT - License

Copyright (c) 2020 **_Nikolas Kososik, student at Epicodus_**
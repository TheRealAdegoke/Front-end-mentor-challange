// Function to check if an integer is positive or negative
// Write a JavaScript function that takes an integer as input and checks if it is positive, negative, or zero. The function should log the result to the console.
const integerState = (integer) => {
  if (integer === 0) {
    console.log("Zero");
  } else if (integer < 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
  return integer;
};

integerState(0); // Logs Zero to the console
integerState(-100); // Logs Negative to the console
integerState(100); // Logs Positive to the console

// Function to check if an integer is Even or Odd
// Write a JavaScript function that takes an integer as input and checks whether it is even or odd. The function should log the result to the console.
function evenOrOdd(integer) {
  if (integer % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

evenOrOdd(10); // Logs Even to the console
evenOrOdd(5); // Logs Odd to the console

// Function to check Grade Calculator
// Write a JavaScript function that takes a numerical grade (0-100) as input and outputs the corresponding letter grade according to the following scale:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: F

const Grade = (studentGrade) => {
  if (studentGrade <= 59) {
    console.log("F");
  } else if (studentGrade >= 60 && studentGrade <= 69) {
    console.log("D");
  } else if (studentGrade >= 70 && studentGrade <= 79) {
    console.log("C");
  } else if (studentGrade >= 80 && studentGrade <= 89) {
    console.log("B");
  } else {
    console.log("A");
  }
  return studentGrade;
};

Grade(10); // Logs F to the console
Grade(65); // Logs D to the console
Grade(75); // Logs C to the console
Grade(84); // Logs B to the console
Grade(95); // Logs A to the console

// Function to check whether it is a leap year
// Write a JavaScript function that takes a year as input and checks whether it is a leap year. The function should return true if it's a leap year and false otherwise. A leap year is either divisible by 4 but not by 100, or divisible by 400.

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
  } else {
    console.log("Not a Leap Year");
  }
  return year;
}

leapYear(2020); // Logs Leap Year to the console
leapYear(2021); // Logs not a Leap Year to the console
leapYear(2024); // Logs Leap Year to the console
leapYear(2025); // Logs not a Leap Year to the console

// Function to check Day of the Week
// Write a JavaScript function that takes a number representing a day of the week (1 for Sunday, 2 for Monday, ..., 7 for Saturday) as input and logs the corresponding day name to the console. Use a switch statement to implement this.

function dayOfWeek(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }

    console.log(dayName);
}

// Test cases
dayOfWeek(1); // Should log "Sunday"
dayOfWeek(3); // Should log "Tuesday"
dayOfWeek(6); // Should log "Friday"
dayOfWeek(8); // Should log "Invalid day number"
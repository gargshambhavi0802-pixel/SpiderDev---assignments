let studentName = prompt("Enter Student Name:");

let marks = [];
let total = 0;
for(let i = 0; i < 5; i++)
{
    let mark = Number(prompt("Enter marks of Subject " + (i + 1)));

    // Validation
    while(mark < 0 || mark > 100)
    {
        mark = Number(prompt("Invalid marks! Enter marks between 0 and 100"));
    }

    marks[i] = mark;
    total = total + mark;
}
let average = total / 5;
let percentage = average;

let grade;
if(percentage >= 90)
{
    grade = "A+";
}
else if(percentage >= 80)
{
    grade = "A";
}
else if(percentage >= 70)
{
    grade = "B";
}
else if(percentage >= 50)
{
    grade = "C";
}
else
{
    grade = "Fail";
}

let highest = marks[0];
let lowest = marks[0];

for(let i = 1; i < 5; i++)
{
    if(marks[i] > highest)
    {
        highest = marks[i];
    }

    if(marks[i] < lowest)
    {
        lowest = marks[i];
    }
}

document.write("<h2>Student Name: " + studentName + "</h2>");

document.write("<h3>Subject Marks</h3>");

for(let i = 0; i < 5; i++)
{
    document.write("Subject " + (i + 1) + " : " + marks[i] + "<br>");
}

document.write("<br>Total Marks: " + total);
document.write("<br>Average: " + average);
document.write("<br>Percentage: " + percentage + "%");
document.write("<br>Grade: " + grade);
document.write("<br>Highest Marks: " + highest);
document.write("<br>Lowest Marks: " + lowest);

let day = prompt("Enter Day (Monday to Sunday)");

switch(day)
{
    case "Monday":
        document.write("<br><br>New week, new goals!");
        break;

    case "Tuesday":
        document.write("<br><br>Keep learning!");
        break;

    case "Wednesday":
        document.write("<br><br>Halfway there!");
        break;

    case "Thursday":
        document.write("<br><br>Keep working hard!");
        break;

    case "Friday":
        document.write("<br><br>Weekend is near!");
        break;

    case "Saturday":
        document.write("<br><br>Enjoy and learn something new!");
        break;

    case "Sunday":
        document.write("<br><br>Rest well and get ready for the week!");
        break;

    default:
        document.write("<br><br>Invalid Day");
}
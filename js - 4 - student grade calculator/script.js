const form = document.getElementById("gradeform");
const marksInput = document.getElementById("marks");
const gradeDisplay = document.getElementById("grade");
const resultDisplay = document.getElementById("result");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let marks = Number(marksInput.value);

    if (marks < 0 || marks > 100) {
        gradeDisplay.innerText = "Grade: Invalid Marks";
        resultDisplay.innerText = "";
        return;
    }

    if (marks >= 90) {
        gradeDisplay.innerText = "Grade: A";
    }
    else if (marks >= 75) {
        gradeDisplay.innerText = "Grade: B";
    }
    else if (marks >= 60) {
        gradeDisplay.innerText = "Grade: C";
    }
    else {
        gradeDisplay.innerText = "Grade: D";
    }

    if (marks >= 60) {
        resultDisplay.innerText = "Result: Pass ";
    }
    else {
        resultDisplay.innerText = "Result: Fail ";
    }

});
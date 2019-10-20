for(i=1; i<9; i++) {
    var subject=document.getElementById("subject");
    var newSubject = subject.cloneNode(true);
    newSubject.id='subject'+i;

    var grade=document.getElementById("grade");
    var newGrade = grade.cloneNode(true);
    newGrade.id='grade'+i;

    var linebreak = document.createElement("br");

    document.getElementById("myform").appendChild(linebreak);        
    document.getElementById("myform").appendChild(newSubject);        
    document.getElementById("myform").appendChild(newGrade);        
};


// // filter Humanities first, search for 2 smallest numbers. remove from list
// 2.add them into a different output 
// 3.search for Math/Science's smallest number. add into the output. remove from list
// 4. filter list and search for 2 smallest numbers. add into output. 

const Submit = document.getElementById("Submit");

if (Submit){
    Submit.addEventListener("click", () => {computation()});
};

output = [];

function computation() {
    const form = document.getElementById("myform");
    const subject1 = document.getElementById("subject").value;
    const subject2 = document.getElementById("subject1").value;
    const subject3 = document.getElementById("subject2").value;
    const subject4 = document.getElementById("subject3").value;
    const subject5 = document.getElementById("subject4").value;
    const subject6 = document.getElementById("subject5").value;
    const subject7 = document.getElementById("subject6").value;
    const subject8 = document.getElementById("subject7").value;
    const subject9 = document.getElementById("subject8").value;

    output.push(subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8, subject9);
    console.log(output);
    };
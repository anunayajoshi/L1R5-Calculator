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

function selectOnlyThis(id){
    const myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox,function(el){
      el.checked = false;
    });
    id.checked = true;
  }

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

    const grade1 = document.getElementById("grade").value;
    const grade2 = document.getElementById("grade1").value;
    const grade3 = document.getElementById("grade2").value;
    const grade4 = document.getElementById("grade3").value;
    const grade5 = document.getElementById("grade4").value;
    const grade6 = document.getElementById("grade5").value;
    const grade7 = document.getElementById("grade6").value;
    const grade8 = document.getElementById("grade7").value;
    const grade9 = document.getElementById("grade8").value;

    output.push(
        {"id":"a","sub":subject1, "gr":grade1},
        {"id":"b","sub":subject2, "gr":grade2},
        {"id":"c","sub":subject3, "gr":grade3},
        {"id":"d","sub":subject4, "gr":grade4},
        {"id":"e","sub":subject5, "gr":grade5},
        {"id":"f","sub":subject6, "gr":grade6},
        {"id":"g","sub":subject7, "gr":grade7},
        {"id":"h","sub":subject8, "gr":grade8},
        {"id":"j","sub":subject9, "gr":grade9},
        );
        console.log(output);
    const HumanSub = output.filter(e => {
         return e.sub == "Humans";})
    const HumanGr = HumanSub.sort(function(a,b) {
        return parseFloat(a.gr) - parseFloat(b.gr);
    });
    const R2 = +HumanGr[0].gr + +HumanGr[1].gr;
    const filtered = output.filter(e => {
        return e.id != HumanGr[1].id && e.id != HumanGr[0].id;
    });
    console.log(R2);
    console.log(filtered);

    const EngSub = filtered.filter(e => {
        return e.sub == "English";
    });
    const L1 = EngSub[0].gr;
    const L1R2 = R2 + +L1;
    console.log(L1R2);
    const filtered1 = filtered.filter(e => {
        return e.id != EngSub[0].id;
    });
    console.log(filtered1);
        
    const MathSciSub = filtered1.filter(e => {
        return e.sub == "Maths/Science" 
    }); 
    const MathSciGr = MathSciSub.sort(function(a,b) {
        return parseFloat(a.gr) - parseFloat(b.gr);
    });

    const L1R3 = L1R2 + +MathSciGr[0].gr;
    console.log(L1R3);
    
    const filtered2 = filtered1.filter(e => e.id != MathSciGr[0].id);
    console.log(filtered2);
    

    const filtered3 = filtered2.sort((function (a,b) {
        return parseFloat(a.gr) - parseFloat(b.gr);}
        ));
    console.log(filtered3);
        

    const L1R5 = L1R3 + +filtered3[0].gr + +filtered3[1].gr;
    console.log(L1R5);

    const CCA = document.forms["CCAPoints"]
    var FinalL1R5 = "";
    var i;
    for (i=0; i< CCA.length; i++) {
        
        if (CCA[i].checked) {
            FinalL1R5 = +FinalL1R5 + L1R5 + +CCA[i].value;
        };
    };
    const div = document.getElementById("l1r5");
    div.innerHTML = `Your raw L1R5 is ${L1R5} and your final L1R5 is ${FinalL1R5}`;
    document.getElementById( 'l1r5' ).scrollIntoView();    
};
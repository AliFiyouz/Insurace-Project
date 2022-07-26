let dateFormat = new Intl.DateTimeFormat("fa");
let yearChoice = document.querySelector("#year-choice");
let submit = document.querySelector("#sub");



function opt(){    
    let selectedCar = document.querySelector("#car-choice").value; 
    let selectedYear = document.querySelector("#year-selction").value;
    let selectedIncurance = document.querySelector("#normal-insurance");
    let selectedIncurance1 = document.querySelector("#complete-insurance");

    console.log(selectedCar + "" + selectedYear + "" + selectedIncurance + "" + selectedIncurance1);
}
// creat a cunstructor
function YearCuns (Year){
    this.Year = dateFormat.format(Date.now()).slice(0,4);   
}



// creat 10 chioce for year selction and convert to english num
for( let i =0 ;i<21;i++){
    let option = document.createElement("option");
    yearChoice.appendChild(option);
    let english = new YearCuns().Year.replace(/۱۴۰۱/gi , 1401);
    option.setAttribute("value", english-i );
}

function CarBasic () {
    
}


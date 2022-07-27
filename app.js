const dateFormat = new Intl.DateTimeFormat("fa"),
 yearChoice = document.querySelector("#year-choice"),
 submit = document.querySelector("#sub"),
 form = document.querySelector("#form");


function opt(){    
    const selectedCar = document.querySelector("#car-choice").value, 
     selectedYear = document.querySelector("#year-choice").value,
     selectedIncurance = document.querySelector("#normal-insurance"),
     selectedIncurance1 = document.querySelector("#complete-insurance");
    console.log(selectedCar + "" + selectedYear + "" + selectedIncurance + "" + selectedIncurance1);
}


//___________________________________________________________________
// event listener for when content load.
document.addEventListener('DOMContentLoaded', yearMaker);

// event listener for when submit form clicked.
form.addEventListener("submit" , function (e) {
// e.perventdefault for when submit clicked form reset.
    e.preventDefault();
// select value of all import value in our form. 
    const year = document.querySelector("#year-choice").value,
    car = document.querySelector("#car-choice").value,
    insurance = document.querySelector('input[name="kindInsurance":cheked').value,
    userInsurance = new InsuranceConstructor(car,year,insurance),
    cost = userInsurance.calculateCost(userInsurance);
    finalCase(userInsurance , cost);
})

// creat a cunstructor for creat a year option inside select tag in index.html.
function YearCuns (Year){
    this.Year = dateFormat.format(Date.now()).slice(0,4);   
}
// creat 10 option for year selction and convert to english number.
// cause persian number i not type of INT is it string type.
for( let i =0 ;i<=20;i++){
    const option = document.createElement("option");
    yearChoice.appendChild(option);
    const english = new YearCuns().Year.replace(/۱۴۰۱/gi , 1401);
    option.setAttribute("value", english-i );
}
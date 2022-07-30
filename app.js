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
document.addEventListener('DOMContentLoaded', YearCuns);

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
// creat a constuctor to can genrate all option can choose
function InsuranceOptimize(year , car , insurance){
    this.year = year;
    this.car = car;
    this.insurance = insurance;
}
// creat portotype for consrtructor
// in this saturation portotype must calculate 
// and compare between car's
InsuranceOptimize.prototype.calculateCost = function(InsuranceOptimize){
// creat variable "cost" for each car 
    let cost;
// creat base price 
    const base = 2000,
// get value what user choose in list of the car
    car = InsuranceOptimize.car;
}
// calculate diffrence between now and year that user choose
const year = InsuranceOptimize.year,
optimizeYear = this.optimizeyear(year),
iNSurance = InsuranceOptimize.insurance;
cost = cost - (optimizeYear * 1.5 * cost) / 100;
cost = this.modelOfInsurance(cost , insurance);
return cost ;


// creat function to check what model of insurance be choosed

InsuranceOptimize.prototype.modelOfInsurance = function (cost , insurance){

    // if kind basic choosed increase price to 15% 
    // and if the other option choosed increase price to 30%
    if (insurance ==="")
}
let yearChoice = document.querySelector("#year-choice");
let dateFormat = new Intl.DateTimeFormat("fa");
let submit = document.querySelector("#sub");
let value1 = document.querySelectorAll(".car");


submit.addEventListener("click" , function(){
    
} )


let validateValue = function(){

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


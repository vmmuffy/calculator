function changeCalculatorDisplay(n) {
  document.getElementById("screen-calculator-count").innerHTML = '';

 document.getElementById("screen-calculator-count").style.display = "none";
  let existentValue = document.getElementById("screen-calculator-result").innerHTML;
  
  document.getElementById("screen-calculator-result").innerHTML = existentValue += n;
}

function getResult() {
  document.getElementById("screen-calculator-count").style.display = "";
  
  let count = document.getElementById("screen-calculator-result").innerHTML;
  
  document.getElementById("screen-calculator-count").innerHTML = count;
 
  document.getElementById("screen-calculator-result").innerHTML = eval(count)
}

function deleteValue() {
  let existentValue = document.getElementById("screen-calculator-result").innerHTML;
  existentValue = existentValue.slice(0,-1);
  
  document.getElementById("screen-calculator-result").innerHTML = existentValue;
  
   if(!existentValue.length) {
     document.getElementById("screen-calculator-count").innerHTML = "";
   }
} 
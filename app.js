function numClick(number){
    document.getElementById('display-area').value +=number;
}
function operatorClick(operator){
    document.getElementById('display-area').value +=operator;
}
function operatorClick(operator){
    var display= document.getElementById('display-area');
    switch (operator){
      case '+':
       case '-':
      case'*':
      case'/':
      display.value += operator;
      break;
      case'%':
      display.value = parseFloat(display.value)/100;
      break;
      case 'x^2':
        display.value +="^2";
        break;
    }
}
function backspaceClick(){
    let display = document.getElementById("display-area");
    let currentValue=display.value;
    if (currentValue  !==''){
        display.value= currentValue.slice(0,-1);
    }
}
function calsquareClick(){
    var display = document.getElementById("display-area");
    var number = parseFloat(display.value);
    var result = Math.pow(number,2);
    display.value=result;
}



function calClick(){
    var display = document.getElementById("display-area");
    display.value = eval(display.value);
}

var num1=+prompt("Enter the number","First num is")
var operator=prompt("Enter the operator")
var num2=+prompt("Enter second number","Second num is")
if(operator=='+'){
    var a=num1+num2;
    document.write(num1+operator+num2+"="+a)
}else if(operator=='-'){
    var a=num1-num2;
    document.write(num1+operator+num2+"="+a)
}else if(operator=='*'){
    var a=num1*num2;
    document.write(num1+operator+num2+"="+a)
}else if(operator=='/'){
    var a=num1/num2;
    document.write(num1+operator+num2+"="+a)
}else if(operator=='%'){
    var a=num1%num2;
    document.write(num1+operator+num2+"="+a)
}
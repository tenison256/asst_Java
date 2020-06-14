var num=+prompt("Enter the number","number is")
var remainder= num%3;
document.write("<p>"+num+"</p>")
if(remainder==0){
    document.write("The number is divsible by 3")
}else {
    document.write("The number is not divisible by 3")
}
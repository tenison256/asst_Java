var firstSub=+prompt("Enter marks of First Subject","Marks")
var secSub=+prompt("Enter marks of Second Subject","Marks")
var thirdSub=+prompt("Enter marks of Third Subject","Marks")
var obtained= firstSub+secSub+thirdSub;
var total=+prompt("Enter total marks","marks")
document.write("<h2>"+"Mark Sheet"+"</h2>")
document.write("<p>"+"Total Marks: "+total+"</p>")
document.write("<p>"+"Marks Obtained: "+obtained+"</p>")
var percent= (obtained/total)*100;
document.write("<p>"+"Percentage"+": "+percent+"%"+"</p>")
if(percent>=80){
    document.write("<p>"+"Grade: "+"A-one"+"</p>")
    document.write("<p>"+"Remakrs: "+"Excellent"+"</p>")
}
else if(percent>=70){
    document.write("<p>"+"Grade: "+"A"+"</p>")
    document.write("<p>"+"Remakrs: "+"Good"+"</p>")
}
else if(percent>=60){
    document.write("<p>"+"Grade: "+"B"+"</p>")
    document.write("<p>"+"Remakrs: "+"You need to improve"+"</p>")
}
else if(percent<60){
    document.write("<p>"+"Grade: "+"Fail"+"</p>")
    document.write("<p>"+"Remakrs: "+"Sorry"+"</p>")
}




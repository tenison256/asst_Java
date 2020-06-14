var a=+prompt("Enter a number","Number is");
document.write("<h3>"+"Table of "+a+"</h3>")

var i;
for(i=1; i<=10; i++){
   j= a*i;
    document.write("<p>"+a+"x"+i+"="+j+"</p>");
}

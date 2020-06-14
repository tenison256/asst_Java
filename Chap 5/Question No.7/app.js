var a=+prompt("Enter price of item 1","price of item 1");
var b=+prompt("Enter Quantity of item 1","Quantity of item 1");
var c= a*b;
var d=+prompt("Enter price of item 2","price of item 2");
var e=+prompt("Enter Quantity of item 2","Quantity of item 2");
var f= d*e;
var shippingCharges=100;
var totalCost=c+f+shippingCharges;
document.write("<h2>"+"Shopping Cart"+"</h2>")
document.write("<p>"+"</p>")
document.write("<p>"+"Price of item 1 is "+a+"</p>")
document.write("<p>"+"Quantity of item 1 is "+b+"</p>")
document.write("<p>"+"Price of item 2 is "+d+"</p>")
document.write("<p>"+"Quantity of item 2 is "+e+"</p>")
document.write("<p>"+"Shipping Charges are "+shippingCharges+"</p>")
document.write("<p>"+"</p>")
document.write("<p>"+"Total Cost of your order is "+totalCost+"</p>")



var favSnack=prompt("Enter your favourite snack","your favorite snack is");
var current =+prompt("Enter your current age","current age")
var max= +prompt("Enter your maximum age","maximum age")
var snacks=+prompt("Enter number of snacks","number of snacks")
var a=max-current;
var totalSnacks= a*snacks;
document.write("<h2>"+"The Lifetime Supply Calculator"+"</h2>")
document.write("<p>"+"Favorite Snacks: "+ favSnack+"</p>")
document.write("<p>"+"Current Age: "+current+"</p>")
document.write("<p>"+"Estimated Maximum Age: "+max+"</p>")
document.write("<p>"+"Amount of Snacks per day: "+snacks +"</p>")
document.write("You will need "+totalSnacks+" "+ favSnack+" to last you until the ripe old age of "+max+"</p>")
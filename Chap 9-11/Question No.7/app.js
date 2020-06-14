var secretNum=+prompt("Enter the secret number","secret number is")
document.write("<h2>"+"Guess Game"+"</h2>")
if(secretNum==1||secretNum<=10)
{
    document.write("Bingo! "+"Correct answer")
}else if(secretNum==11){
    document.write("Your are close enough to the correct answer")
}
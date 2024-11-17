function firstfunc()
{
    alert:("you have created your first function! yea baby!");
    // this is a comment for java just inputted the functions for firstfunc()


}


function flipcoin() // Creates function for connected flipcoin
{

    var coinelement = document.getElementById ("coin"); //gets element from maint page by ID
    var result=Math.floor(Math.random()*2); //Chooses random elements of 2 heads or tails
    if (result == 1)
        { document.getElementById("coin").innerHTML="Heads"; // sets parameters of results
            
        }
    else 
        {
        document.getElementById("coin").innerHTML="Tails"; // sets or else paramets of results
        }
}
function validate() //functions for validation
{ 
    var name = document.getElementById("initstring").value;
    var lname = document.getElementById("Lastname").value; // Sets value of var
    var Zipcode = document.getElementById("Zipcode").value;


    var fullname=name+ " "+lname;  // var of both combined last name+ first name
    document.getElementById ("inputStatus").innerHTML =fullname;


    if (fullname.length<=2)
    {
            document.getElementById("inputStatus").innerHTML ="Name not long enough";

    }

    if (( Zipcode<10000)||(Zipcode >=100000)){ //sets the parameters of inputted values

        document.getElementById("inputStatus").innerHTML ="Zipcode not Valid";


    }

}
    
function string(event)
{
    console.log (" begin string function")
    var string1 = document.getElementById ("firstinput").value; //sets the parameters needed to be met when using palindrome checker

    var splitstr = string1.split ("");

    var reversestr = splitstr.reverse();

    var joinstr = reversestr.join("");


    if (string1 == joinstr) 

        {
                document.getElementById ("palindromestring"). innerHTML = "palindrome";
        }

            else  // set parameters if true or not 
            {
                document.getElementById("palindromestring"). innerHTML = "not a palindrome"; //Gets Element ID on HTML Page


            }
}

function mememove(){

console.log("begin moving")

var Meme = document.getElementById ("memeimage")
var pos=0
var timer=setInterval(function(){
    pos++
    console.log(pos)
    Meme.style.left=pos+"px"      //sets the value of the movements in miliseconds
    if(pos>=600){          
pos=0

    }

},25)
}





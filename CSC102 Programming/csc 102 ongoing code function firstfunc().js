function firstfunc()
{
    alert:("you have created your first function! yea baby!");
    // this is a comment for java just inputted the functions for firstfunc()


}


function flipcoin()
{

    var coinelement = document.getElementById ("coin");
    var result=Math.floor(Math.random()*2);
    if (result == 1)
        { document.getElementById("coin").innerHTML="Heads";
            
        }
    else 
        {
        document.getElementById("coin").innerHTML="Tails";
        }
}
function validate()
{ 
    var name = document.getElementById("initstring").value;
    var lname = document.getElementById("Lastname").value;
    var Zipcode = document.getElementById("Zipcode").value;


    var fullname=name+ " "+lname;
    document.getElementById ("inputStatus").innerHTML =fullname;


    if (fullname.length<=2)
    {
            document.getElementById("inputStatus").innerHTML ="Name not long enough";

    }

    if (( Zipcode<10000)||(Zipcode >=100000)){

        document.getElementById("inputStatus").innerHTML ="Zipcode not Valid";


    }

}
    
function string(event)
{
    console.log (" begin string function")
    var string1 = document.getElementById ("firstinput").value;

    var splitstr = string1.split ("");

    var reversestr = splitstr.reverse();

    var joinstr = reversestr.join("");


    if (string1 == joinstr)

        {
            document.getElementById ("palindromestring"). innerHTML = "palindrome";
        }

            else
            {
                document.getElementById("palindromestring"). innerHTML = "not a palindrome";


            }





            

}
// Bai tap 01
var x=5; var y=6; var z=x+y;
document.getElementById("text").innerHTML=z;
// Bai tap 02
var pi=3.14;
document.getElementById("text1").innerHTML=pi;
// Bai tap 03
var a=5;var b=2;var c=3;var d=a+b+c;
document.getElementById("text2").innerHTML=d;
// Bai tap 04
var e="5";var f="2";var g="3";var j=e+f+g;
document.getElementById("text3").innerHTML=j;
// Bai tap 05
function myfunction()
{
    alert("I am an alert box")
}
// Bai tap 06
function myfunction1()
{
    var h;
    if (confirm("Press the button!") ==true) 
    {
        h ="You press Yes button!";
    }    
    else
    {
        h ="You press No button!";
    }
    document.getElementById("press").innerHTML=h;
    console.log(h);
}
// Bai tap 07
function myfunction2()
{
    var person=prompt("Please enter your name","Harry Porter");
    if (person !=null)
    {
        document.getElementById("name").innerHTML="Hello "+person+". How are you today?";
        console.log(name);
    }
}
// Bai tap 08
function myfunction3()
{
    alert("Hello\nHow are you?");
}
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
//Bai tap 09
if (new Date().getHours()<18){
    document.getElementById("date").innerHTML="Good Day!";
}
//Bai tap 10
function myfunction4()
{
    var hour = new Date().getHours();
    var greeting;
    if (hour<18)
    {
        greeting="Good Day!";
    } 
    else 
    {
        greeting="Good Evening!";
    }
    document.getElementById("date1").innerHTML=greeting;
}
//Bai tap 11
function myfunction5()
{
    var D
    switch (new Date().getDay())
    {
        case 0:
        D = "Sunday";
        break;
        case 1:
        D = "Monday";
        break;
        case 2:
        D = "Tuesday";
        break;
        case 3:
        D = "Wednesday";
        break;
        case 4:
        D = "Thursday";
        break;
        case 5:
        D = "Friday";
        break;
        case 6:
        D = "Saturday";
        break;
    }
    document.getElementById("date2").innerHTML="Today" + D;
}
//Bai tap 12

function myfunction6()
{
    var age1, voteable;
    age1 = document.getElementById("age").value;
    voteable = (age1 <18)? "Too young" : "Old enough";
    document.getElementById("Age").innerHTML=voteable+" to vote."
}

//Bai tap 13
function myfunction7()
{
    var text ="";
    var i;
    for (i=0;i<5;i++)
    {
        text +="The number is " + i + "<br>";
    }
    document.getElementById("data").innerHTML=text;
}
//Bai tap 14

    var txt="";
    var person = {fname:"John", lname:"Doe", age:25};
    var x;
    for(x in person)
    {
        txt += person [x] + " ";
    }
    document.getElementById("data1").innerHTML=txt;
// Bai tap 15
function myfunction8()
{
    var text1 ="";
    var i = 0;
    while (i <10) 
    {
        text1 += "<br>The Number is "+ i;
        i++;
    }
    document.getElementById("data2").innerHTML=text1;
}
//Bai tap 16
function myfunction9()
{
    var text2 ="";
    var I = 0;
    do
    {
        text2 += "<br>The Number is "+ I;
        I++;
    }
    while (I <10)  
    document.getElementById("data3").innerHTML=text2;
}

//Bai tap 17
var cars = ["Audi","Volvo","BMW"];
document.getElementById("Car").innerHTML=cars;
//Bai tap 18
var cars1 = new Array("Audi","Volvo","BMW");
document.getElementById("Car1").innerHTML=cars1[2];
//Bai tap 19
var fruit = ["Apple","Orange","Mango","Banana"];
document.getElementById("data4").innerHTML=fruit.length;
//Bai tap 20
function myfunction10()
{
    var index;
    var text3= "<ul>";
    var fruit1=["Banana","Mango","Apple","Orange"];
    for (index=0;index < fruit1.length; index++)    
    {
        text3 += "<li>" + fruit1[index] + "</li>";
    }
    text3 +="</ul>";
    document.getElementById("data5").innerHTML=text3;
}
//Bai tap 21
var fruit2= ["Banana","Apple","Orange","Mango"];
document.getElementById("data6").innerHTML=fruit2.join(" * ");
//Bai tap 22
var fruit3= ["Banana","Apple","Orange","Mango"];
document.getElementById("data7").innerHTML=fruit3;
function myfunction11()
{
    document.getElementById("data7").innerHTML=fruit3.pop();
}
//Bai tap 23
var fruit4= ["Banana","Apple","Orange","Mango"];
document.getElementById("data8").innerHTML=fruit4;
function myfunction12()
{
    fruit4.push("Kiwi");
    document.getElementById("data8").innerHTML=fruit4;
}
//Bai tap 24
var fruit5 = ["Banana","Apple","Orange","Mango"];
document.getElementById("data9").innerHTML=fruit5;
function myfunction13()
{
    fruit5.shift();
    document.getElementById("data9").innerHTML=fruit5;
}
//Bai tap 25
var fruit6 = ["Banana","Apple","Orange","Mango"];
document.getElementById("data10").innerHTML=fruit6;
function myfunction14()
{
    fruit6.splice(2,0,"Lemon","Kiwi");
    document.getElementById("data10").innerHTML=fruit6;
}
//Bai tap 26
var fruit7 = ["Banana","Apple","Orange","Mango"];
document.getElementById("data11").innerHTML=fruit7;
function myfunction15()
{
    fruit7.splice(1,2);
    document.getElementById("data11").innerHTML=fruit7;
}
//Bai tao 27
var fruit8 = ["Banana","Apple","Orange","Mango"];
document.getElementById("data12").innerHTML=fruit8;
function myfunction16()
{
    fruit8.sort();
    document.getElementById("data12").innerHTML=fruit8;
}
//Bai tap 28
var fruit9 = ["Banana","Apple","Orange","Mango"];
document.getElementById("data13").innerHTML=fruit9;
function myfunction17()
{
    fruit9.reverse();
    document.getElementById("data13").innerHTML=fruit9;
}
//Bai tap 29
function myfunction18()
{
    var myboys=["David","John"];
    var mygirls=["Christine","Ana","Joe"];
    var mychil=mygirls.concat(myboys);
    document.getElementById("chil").innerHTML=mychil;
}

//Bai tap 30
function myfunction19()
{
    document.write("Hello there!");
}

//Bai tap 31
 function myfunction20(Ten,Tuoi)
 {
     document.write(Ten+" is "+Tuoi+" years old ") 
 }

 //Bai tap 32
 function myfunction21(a1,b1)
 {
     return a1*b1;
 }
 document.getElementById("data14").innerHTML=myfunction21(4,3)

 //Bai tap 33

 var connguoi={Ten1:"John",Ho1:"Smith",Tuoi1:40,Maumat:"Blue"};
 document.getElementById("data15").innerHTML=connguoi.Ten1 +" is "+connguoi.Tuoi1+" years old"

 //Bai tap 34
 var connguoi1=
    {
    Ten2:"Johny",
    Ho2:"Smith",
    Tuoi2:70,
    id:5566, 
    fullname:function()
        {
            return this.Ten2+" "+this.id;
        }
    }
document.getElementById("data16").innerHTML=connguoi1.fullname();
 
//Bai tap 35


//Bai tap 36
function a()
{
    window.open('http://google.com','_blank');
}
function b()
{
    window.close();
}

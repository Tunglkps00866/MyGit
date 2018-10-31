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
    var x1;
    for(x1 in person)
    {
        txt += person [x1] + " ";
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
    window.open=('https://google.com');
}
function b()
{
    window.close();
}
//Bai tap 37
function curr_location()
{
    alert(location.href);
}
function change_location()
{
    window.location="https://google.com";
}
//Bai tap 38

function back()
{
    window.history.back();
}
//Bai tap 39
/*
    document.write("<p>Browser: ")
    document.write(navigator.appName + "</p>")
    document.wrtite("<p>Browser Version: ")
    document.write(navigator.appVersion + "</p>")
    document.write("<p>Code: ")
    document.write(navigator.appCodeName + "</p>")
    document.write("<p>Platform: ")
    document.write(navigator.platform + "</p>")
    document.write("<p>Cookie Enable: ")
    document.write(navigator.cookieEnabled + "</p>")
    document.write("<p>Online: ")
    document.write(navigator.onLine + "</p>")
*/
//Bai tap 40
function myfunction22()
{
    alert('Hello');
}
//Bai tap 41
var myelement=document.getElementById("intro");
document.getElementById("data17").innerHTML="The text from the intro paragraph is "+myelement.innerHTML;

//Bai tap 42
//var x2=document.getElementsByTagName("p")
//document.getElementById("data18").innerHTML="The first paragraph (index0) is "+ x2[0].innerHTML;

//Bai tap 43
var x3=document.getElementsByClassName("intro1");
document.getElementById("data19").innerHTML="The first paragraph: "+x3[0].innerHTML;

//Bai tap 44
function myfunction23()
{
    document.getElementById("myimg").src = "img2.jpg"
}

//Bai tap 45
function myfunction24()
{
    document.getElementById("p2").style.color="blue";
    document.getElementById("p2").style.fontSize="larger";
    document.getElementById("p2").style.fontFamily="Arial"
}

//Bai tap 46
function mouseover(obj)
{
    obj.innerHTML="Thank you";
}
function mouseout(obj)
{
    obj.innerHTML="Mouse over me";
}

//Bai tap 47
/*
function myfunction25()
{
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);
    var ele = document.getElementById("div1");
    ele.appendChild(para);
}

*/

//Bai tap 48
function myfunction26()
{
    var parent = document.getElementById("div2");
    var child = document.getElementById("p2_1");
    parent.removeChild(child);
}

//Bai tap 49
var str ="Apple, Banana, Kiwi";
document.getElementById("data20").innerHTML=str.substr(7,6);

//Bai tap 50
function myfunction27()
{
    var upcase = document.getElementById("data21").innerHTML;
    document.getElementById("data21").innerHTML=upcase.toUpperCase();
}

//Bai tap 51
function myfunction28()
{
    document.getElementById("data22").innerHTML=Math.random();
}

//Bai tap 52
function myfunction29()
{
    document.getElementById("data23").innerHTML=Math.E + "<br>" + Math.PI + "<br>"
}

//Bai tap 53
var day = new Date();
document.getElementById("data24").innerHTML=day;

//Bai tap 54
var day1=new Date();
document.getElementById("data25").innerHTML=day1.getFullYear();

//Bai tap 55
function keyup()
{
    // lay 2 the HTML
    var input = document.getElementById("mess");
    var div = document.getElementById("data26");
    //gan noi dung vao the HTML
    div.innerHTML=input.value;
}

//Bai tap 56
function myfunction30()
{
    alert("You copied completely")
}

//Bai tap 57
function myfunction31(x4)
{
    x4.style.background = "lightgrey";
}

//Bai tap 58
function tinh()
{
    //lay 3 o layout
    var a1 = document.getElementById("a");
    var b1 = document.getElementById("b");
    var ketqua= document.getElementById("ketqua");
    //tinh 2 o dau tien 
    var tong = parseInt(a1.value) + parseInt(b1.value);
    //gan gia tri vao o thu 3
    //kiem tra tong 2 so co bi loi hay ko
    if (!isNaN(tong))
    ketqua.value=tong;
}
//Bai tap 59
function myfunction32()
{
    //lay gia tri 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repass").value;
    //kiem tra gia tri 
    if (username=="")
    {
        alert("Ban chua nhao ten dang nhap");
        return false;
    }
    if (password=="")
    {
        alert("Ban chua nhap mat khau");
        return false;
    }
    if (password!= repassword)
    {
        alert("Mat khau nhap lai khong dung");
        return false;

    }
    return true;
}
//Bai tap 60

function myfunction33()
{
    var kt = document.getElementById("check").value;
    if (/hello/.test(kt))
    {
        document.getElementById("data27").innerHTML=("Trong chuoi co chu hello")
    }
    else
    {
        document.getElementById("data27").innerHTML=("Trong chuoi khong co chu hello")
    }
}

//Bai tap 61
function myfunction34()
{
    var kiemtra1 = document.getElementById("check1").value;
    if (/n+/.test(kiemtra1))
    {
        document.getElementById("data28").innerHTML=("Trong chuoi co chu n");
    }
    else
    { 
        document.getElementById("data28").innerHTML=("Trong chuoi khong co chu n");
    }
}
//Bai tap 62
function myfunction35()
{
    var patt = /^[\w\d]+@[\w\d]+(\.[\w\d]{2,4}){1,2}$/;
    var kt1=document.getElementById("mail").value;
    if (patt.test(kt1))
    {
        document.getElementById("data29").innerHTML=("Email hop le");
    }
    else
    {
        document.getElementById("data29").innerHTML=("Email khong hop le")
    }
}

//Bai tap 63
function myfunction36()
{
    var patt1 = /^www+\.[\w\d]+(\.[\w\d]{2,4}){1,2}$/i;
    var kt2 = document.getElementById("url").value;
    if(patt1.test(kt2))
    {
        document.getElementById("data30").innerHTML="URL hop le";
    }
    else
    {
        document.getElementById("data30").innerHTML="URL khong hop le";
    }
}

//Bai tap 64
function myfunction37()
{
    // Cach1: khai bao bien lay gia tri
    //var textbox = $('#id-textbox');
    //alert(textbox.val());
    // Cach2: khai bao truc tiep
    alert($('#id-textbox').val());
}

//Bai tap 65
function myfunction38()
{
    $('#div-content').addClass('important');
}

//Bai tap 66
function myfunction39()
{
    $('#p-content').hide();
}
function myfunction40()
{
    $('#p-content').show();
}

//Bai tap 67
function myfunction41()
{
    $('#id-textbox1').css("backgroundColor","yellow");
}
function myfunction42()
{
    $('#id-textbox1').css("backgroundColor","pink");
}

//Bai tap 68
function myfunction43()
{
    $('.cl-paragraph').hide();
}
function myfunction44()
{
    $('.cl-paragraph').show();
}

//Bai tap 69
function myfunction45()
{
    $('#id-paragraph').fadeOut(500);
}
function myfunction46()
{
    $('#id-paragraph').fadeIn(500);
}

//Bai tap 70
function myfunction47()
{
    $('.cl-paragraph1').slideUp(500);
}
function myfunction48()
{
    $('.cl-paragraph1').slideDown(500);
}

//Bai tap 71
function myfunction49()
{
    $('tr:even').css({"backgroundColor":"red","color":"yellow"});
}
function myfunction50()
{
    $('tr:odd').css({"backgroundColor":"blue","color":"white"});
}

//Bai tap 72
$(document).ready(function()
{
    $("#id-button2").click(function()
    {
        alert("Text: " + $("#id-content").text())
    })
    $("#id-button3").click(function()
    {
        alert("Text: " + $("#id-content").html())
    })//dong click
})//dong ready

//Bai tap 73
$(document).ready(function()
{
    $("#id-button4").click(function()
    {
        alert("Value: " + $("#id-content1").val());
    })
})

//Bai tap 74
$(document).ready(function()
{
    $("#id-button5").click(function()
    {
        alert($("#url1").attr("href"));
    })//dong click
})//dong ready

//Bai tap 75
$(document).ready(function()
{
    $("#id-button6").click(function()
    {
        $("#id-content2").text("Hello World");
    })
    $("#id-button7").click(function()
    {
        $("#id-content3").html("<b>Hello World</b>");
    })
    $("#id-button8").click(function()
    {
        $("#id-content4").val("Green academy");
    })//dong click
})//dong ready

//Bai tap 76
$(document).ready(function()
{
    $("#id-button9").click(function()
    {
        $("#url2").attr("href","http://google.com")
    })//dong click
})//dong ready

//Bai tap 77
$(document).ready(function()
{
    $("#id-button10").click(function()
    {
        $("")
    })
})


var a = "3";

var b="6";
var c="5";
var temp;

if(a>b){
    temp=a;
    a=b;
    b=temp;

}

if(a>c){
    temp=a;
    a=c;
    c=temp;
}
if(b>c){
    temp=b;
    b=c;
    c=temp;
}

console.log(a + b + c);


var bo= 22;
var me = 25;

var anhTrai=10;

var emgai=11;

var hoi= 30;

if(hoi < bo  && bo == me){
    console.log("Chào bố");
}
else if( hoi < me && me > bo)
{
    console.log("Chào mẹ");
    }
else if (anhTrai < hoi && emgai == anhTrai){
    console.log("chào annh trai");
}
else if (emgai < hoi && emgai > anhTrai){
    console.log("chào em gái");
}


var x =5 ;
var y= 15;
var z= 22;

var tong= (x + y +z);

if(tong%2==0){
    console.log("Số chẵn");
}
else{
    console.log("só lể");
}
  
var t = 3;
var u=3;
var i= 2;

if( t==u && t==i && u==i){
    console.log("tam giac đều");
}
else if (t==u && t>i & u>i){
    console.log("tam giac cân");
}
else (){
    console.log("Tam gác vuông");
}
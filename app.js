var sayi = Math.floor(Math.random()*101);
var sum=0
function tahmin() {
   while (true) {
    var x = document.getElementById("guess").value;
    if(x>sayi){
        sum +=1
        document.getElementById("demo").innerHTML="Daha küçük bir sayı gir";
        document.getElementById("sayac").innerHTML =sum;
        break;
    }
    else if(x<sayi){
        sum +=1
        document.getElementById("demo").innerHTML="Daha büyük bir sayı gir";
        document.getElementById("sayac").innerHTML=sum;
        break;
    }
    else{
        document.getElementById("demo").innerHTML="Tebrikler";
        break;
    }
   }
}

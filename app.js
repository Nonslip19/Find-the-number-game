var sayi = Math.floor(Math.random()*101);
var sum=0;

function tahmin() {
    var input = document.getElementById("guess").value;
        
   while (true) {
    
    if (input=="") {
        document.getElementById("demo").innerHTML="you must enter a number";
        
        break;
    }
    else if(input <= 0 || input > 100) {
         document.getElementById("demo").innerHTML="Enter a number between 1 to 100";
        break;
    }
    else if(input>sayi){
        sum +=1
        document.getElementById("demo").innerHTML="enter a smaller number";
        document.getElementById("sayac").innerHTML =sum;
        break;
    }
    else if(input<sayi){
        sum +=1
        document.getElementById("demo").innerHTML="enter a larger number";
        document.getElementById("sayac").innerHTML=sum;
        break;
    }
    else{
        document.getElementById("demo").innerHTML="CONGRATULATIONS";
        break;
    }
   }
}

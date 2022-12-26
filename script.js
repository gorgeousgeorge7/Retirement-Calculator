function myFunction() {
    var a = document.getElementById("current").value;
    var b = document.getElementById("retage").value;

    var x= parseInt(a);
    var y =parseInt(b);
  
  var result = y - x;
  
  var year = 2023 + result;
  
  if(x < y){
  document.getElementById("calculated").innerHTML =
    "You have " + result + " years left until you can retire." + "<br>" 
  + "It's 2023, so you can retire in " + year;
  }else{
    document.getElementById("calculated").innerHTML =
      "you already can retire";
  }

}


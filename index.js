
document.querySelector("button").addEventListener("click", myFunction);

function myFunction() {
   var names =  document.getElementById("name").value;
      names = names.toUpperCase();
   if (names==null || names==""){  
      alert("Invalid Name");  
      return false; }
   var dates = document.getElementById("date").value;
   
   var day = new Date(dates);
   
   
   var today = new Date();
   
   
   
   if(day.getDay()== today.getDay() && day.getMonth() == today.getMonth() ){
      return alert("Happy Birthday " +  names + ". Hope almighty Allah gives you all the happiness and prosperity in life" )
   } else {
      return alert("Have to a good day!")
   }  
}


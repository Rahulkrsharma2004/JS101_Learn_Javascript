// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties


let DOB = 2004

let age = 2023-DOB;

 if(age >= 13 && age<= 19)
 {
   console.log("Teenage")
 }
else if(age >= 20 && age <= 29)
{
  console.log("Twenties")
}



// Given any character, if it is a vowel print "Vowel"

let str = "e"

if(str == "a" || str == "e" || str == "i" || str == "o" || str == "u")
{
  console.log("Vowel")
}
else{
  console.log("Consonent")
}




// Given and character if it is a consonant print "Consonant"

let str1 = "r"

if(str1 == "a" || str1 == "e" || str1 == "i" || str1 == "o" || str1 == "u" )
{
  console.log("Vowel")
}
else{
  console.log("Consonent")
}




let a = 30;
let b = 20;
let c = 50;

// if(a > b && a > c)
// {
//   console.log("a is greatest")
// }
// else if(b > a && b > c)
// {
//   console.log("b is greatest")
// }
// else
// {
//   console.log("c is greatest")
// }

a > b && a > c ? console.log("a is greatest") : b > a && b > c ?  console.log("b is greatest") : console.log("c is greatest")




 // Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...


 let day = 1;

 switch(day)
   {
     case 1 :
       console.log("Sunday");
      
 
     case 2 :  
       console.log("Monday");
       
 
     case 3 :
       console.log("Tuesday");
       
 
     case 4 :
       console.log("Wednesday");
       
 
     case 5 :
       console.log("Thursday");
       
 
     case 6 :
       console.log("Friday");
      
 
     case 7 :
       console.log("Saturday");
      
   }
  
 
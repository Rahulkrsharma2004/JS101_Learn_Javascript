// Print the numbers from the given starting point till ending point (including both start and end)

var start = 1
var end = 10

for(var i = start; i <= end; i++){
  console.log(i)
}




// Print the odd numbers from 0 till the given limit

var limit = 15

for(var i = 0; i <= limit; i++){
      if(i % 2  == 1){
        console.log(i)
      }
       
}

 
  
// Print the sum of all the multiples of 3 from 0 to the given limit

var limit = 20
var sum = 0

for(var i = 0 ; i <= limit ; i++){
  if(i % 3 == 0){
    sum = sum + i
  }
}
console.log(sum)



// Print the average of even numbers from 1 to 100 (both included)

var avg = 0
var sum = 0
var count = 0


for(var i = 1 ;i <= 100 ; i++){
  if(i % 2 == 0){
    sum = sum + i
    count++
    
  }
  var avg = sum/count
}
console.log(avg) 



 // let x = 0

// for(let i = 0 ; i < 5 ; i++){
//   for(let i = 0 ; i > -5 ; i--){
//    x = x + 1
//   }
// }
// console.log(x)

// for(i = 0 ; i < 3 ; i++){
//   let bag = ""
//   for(j = 0 ; j < 3 ; j++){
//     bag = bag + "*" + " "
//   }
//   console.log(bag)
// }

// for(let i = 1 ; i <= 5 ;i++){
//   for(j = 1 ; j <= i ; j++){
//     if(i % j == 0){
//       console.log(i)
//       break;
//     }
//   }
// }

// let x = 0
// while(x < 10){
//   x += 2
// }
// console.log(x)



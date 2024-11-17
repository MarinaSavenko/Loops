//First
//for (let num = 1; num <= 20; num ++){
   // if (num%2==0){
   //     console.log(num);
    //} 
//}




//Second
let numRand = Math.floor(Math.random() * 10) + 1; 
let numCons = Number(prompt("Enter number from 1 to 10")); 

while (numCons !== numRand) {
    alert("Try again, the correct number was " + numRand);  
    numCons = Number(prompt("Enter number from 1 to 10")); 
}

alert("You entered " + numCons + " and won!"); 
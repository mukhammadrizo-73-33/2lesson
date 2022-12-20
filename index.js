function add(arr) {
   let  num = 0;
   arr.forEach(element => {
       num += element;
   });
   console.log("1chi" + " " + num);

}
add([2,6,7,9]);




function addread(arr) {
    let addread = arr.join("")
    console.log(addread);
}

addread([6, 8, 1]);//2




function Voters(arr) {
   let voice = 0;
   arr.forEach(voices => {
       if (voices.voted) {
           voice++
       }
   });
   console.log(`voices : ${voice}`);
}

var voters = [
   { name: 'Lana', age: 28, voted: true },
   { name: 'Kimmy', age: 22, voted: false },
   { name: 'Emily', age: 27, voted: false },
   { name: 'Elena', age: 18, voted: true },
   { name: 'Elisa', age: 43, voted: true },
   { name: 'Ava', age: 52, voted: false },

];
Voters(voters);



var voters = [
   { name: 'Lana', age: 28, voted: true },
   { name: 'Kimmy', age: 22, voted: false },
   { name: 'Emily', age: 27, voted: false },
   { name: 'Elena', age: 18, voted: true },
   { name: 'Elisa', age: 43, voted: true },
   { name: 'Ava', age: 52, voted: false },

];



function identificationvoters(arr) {
   let elderadults = 0;
   let middleadults = 0;
   let youngadults = 0;



   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === true) {
         if (arr[i].age <= 25) {
            youngadults++
         }
         if (arr[i].age <= 35 && arr[i].age >= 26) {
            middleadults++
         }
         if (arr[i].age >= 36) {
            elderadults++
         }
      }
   }
}
console.log(`young ages: ${youngadults}` + " " + ` Middle ages: ${middleadults}` + " " + `The Elderly: ${elderadults}`);

identificationvoter(voters)



let arrayp = [7, -43, 67, -10,0, -32, 23, -1];
function possitivenumadd(arrayp) {
    let number = 0;
    arrayp.forEach(element => {
        if (element > 0) {
            number += element
        }
    });
    console.log(number);
}
possitivenumadd(array) 







let arrayn = [7, -43, 67, -10,0, -32, 23, -1];
function negativenumadd(arrayn) {
    let number = 0;
    arrayn.forEach(element => {
        if (element < 0) {
            number += element
        }
    });
    console.log(number);
}
negativenumadd(array) 



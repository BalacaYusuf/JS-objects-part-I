

// 1. Write a JavaScript program to list the properties of a JavaScript

// let PropObj = {
//     nameOfPerson : 'Yusuf',
//     surname : 'Balaca',
//     age : 24
// }

// let keys=Object.keys(PropObj);
// let value=Object.values(PropObj);

// console.log(keys);
// console.log(value);



// 2. Write a JavaScript program to sort an array of JavaScript objects

// var library = [
//     {
//       title: 'The Road Ahead',
//       author: 'Bill Gates',
//       libraryID: 1254
//     },
//     {
//       title: 'Walter Isaacson',
//       author: 'Steve Jobs',
//       libraryID: 4264
//     },
//     {
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       author: 'Suzanne Collins',
//       libraryID: 3245
//     }
//   ];
  
//   library.sort(function(a, b) {
//     return a.libraryID - b.libraryID;
//   });
  
//   console.log(library);




// 3.  Write a JavaScript function to check whether an object contains a given property



// let prop={
//     PersonName :'Yusuf',
//     personFirstName :'Khamoyev',
//     age : 24

// }

// function obj(obj,pro)
// {
// return obj.hasOwnProperty(prop)
// }

// console.log(obj(prop,"names"));


// 4  Write a JavaScript program that returns a subset of a string.Sample Data: dog
 


// function animal(str) {
//     if (str.length === 0) {
//       return [""];
//     }
  
//     const firstChar = str[0];
//     const string = str.slice(1);
//     const subsetsOfRest = animal(string);
  
//     const subsets = subsetsOfRest.map(subset => firstChar + subset);
//     return subsetsOfRest.concat(subsets);
//   }
  
  
//   const inputString = "dog";
//   const result = animal(inputString);
//   console.log(result);

//5. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

   

function ObjOpposite(mainObyect) {
    const opposite = {};
    for (const key in mainObyect) {
    
      opposite[mainObyect[key]] =key;
      //opposite[Yusuf];


     // obj[name]="yusuf"=name

       
      
    // console.log(swappedObj[obj[key]]);
    }
    return opposite;
  }
  
  // Example usage:
  const mainObyect = {
    name: "Yusuf",
    age: 25,
    city: "Germany"
  };

  
  
 
  console.log(ObjOpposite(mainObyect));





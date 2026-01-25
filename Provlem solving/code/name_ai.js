/*
    user input a name 
    Ai detect the name is mal name for female name
    print - male/female 
*/


// input user name
const name = "MR Ashraful";

// male header
let maleList = ["mr","md","mr.","md.","MD","MR","MD.","MR."];
// female header
let femaleList = ["ms","ms.","MS","MS.","akter"];



function detectGender(name){

    // make this text an array
    let array = name.split(' ');
    
    let isMale = array.some(item => maleList.includes(item)); // check male
    let isFeMale = array.some(item => femaleList.includes(item)); // check female

    // check male or female
    if (isMale) {
        return "Male" ; // return result
    }else if (isFeMale) {
        return "Female"
    }else{
        return "not found"
    }
    
}

console.log(detectGender(name));





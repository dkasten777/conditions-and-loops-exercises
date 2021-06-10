
console.log("this is execise 1");


let actualTemp = 90
let desiredTemp = 70

if (actualTemp < desiredTemp){
    console.log ("run heat");
 } else if (actualTemp > desiredTemp) {
     console.log ("run a/c");
 } else {
     console.log ("standby");
 }




console.log ("this is exercise 2");

let name1 = "Jimmy Neutron", name2 = "Edgerrin James", name3 = "Franklin Delano Roosevelt"
if (name1.length > name2.length && name1.length > name3.length){
    console.log(name1 + " has the longest name")
}
    else if(name2.length > name1.length && name2.length > name3.length){
        console.log(name2 + " has the longest name")
    }
    else if (name3.length > name1.length && name3.length > name2.length){
        console.log(name3 + " has the longest name")
    }
    else if (name1.length === name2.length && name1.length > name3.length){
        console.log(name1 + " and " + name2 + " tie for the longest name")
    }
    else if (name2.length === name3.length && name2.length > name1.length){
        console.log(name2 + " and " + name3 + " tie for the longest name")
    }
    else if (name3.length === name1.length && name3.length > name2.length){
        console.log(name1 + " and " + name3 + " tie for the longest name")
    }
    else if (name1.length === name2.length && name1.length === name3.length){
        console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`)
    }



console.log ("this is exercise 3");
console.log ("counting up and down with for loop")
for (let i = 1; i < 11; i++){
    console.log(i);
}
for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log ("counting up and down with while loop")
let i = 1
while (i <= 10) {
    console.log(i);
    i++
}
let a = 10
while (a >= 1){
    console.log(a);
    a--
}

console.log ("counting up and down w/ do...while loop")
let b = 1
do {
    console.log(b);
    b++
 } while (b < 11);

let c = 10
do {
    console.log(c);
    c--
} while (c > 0);

console.log("counting up with for...of loop");

let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let d2 of d) {
        console.log(d2);
    } 
    









































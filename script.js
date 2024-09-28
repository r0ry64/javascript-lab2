let number = 420;
if (number > 0) {
    console.log(number,"is a positive number");
} else if (number < 0) {
    console.log(number,"is a negative number");
} else {
    console.log(number,"equals zero");
}

let day = 6
switch (day) {
    case 1:
        console.log("Today is Sunday");
        break;
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    case 5:
        console.log("Today is Thursday");
        break;
    case 6:
        console.log("Today is Friday");
        break;
    case 7:
        console.log("Today is Saturday");
        break;
}

console.log("This is a For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("This is a While Loop:");
let i = 1;
while (i <= 5) { 
    console.log(i);
    i += 1;
}

console.log("This is a Do...While Loop:");
let j = 1; 
do {
    console.log(j);
    j += 1;
} while (j <= 5);

console.log("This is a For Loop that breaks at 3:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
    if (i == 3) {
        break;
    }
}

console.log("This is a For Loop that skips 3 and continues at 4:");
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

let globalVar = "I'm global!";
function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar,localVar);
}
scopeExample();

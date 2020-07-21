console.log("Question 1")

let nos = [];

while(true)
{
    var n = Number(prompt("Enter positive no:"));

    if((!n) || (n==0))
        break;

    nos.push(n);

}

console.log(nos);

let odd = nos.filter(no=>no%2!= 0);

console.log("odd nos = "+odd);

let cubes = nos.filter(no=>no%2!=0).map(no=>no**3);

console.log("cubes ="+cubes);
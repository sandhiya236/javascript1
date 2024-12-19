// example 1
let a;
let value=a ? "welcome" :"no value";
console.log(value);


// example 2
let testscore=98;
let grade=testscore>89 ? "A":  testscore>70 ? "B": testscore>69 ? "C" : "D";
console.log(grade);

// game example

let player="paper";
let computer="scissors";
let result=
         
         player === computer ? "Tie"
         :player === "rock "  && computer==="paper"  ? "computer win!"
         :player === "paper "  && computer==="scissors"  ? "computer win!"
         :player ===  "scissors"  && computer==="rock"  ? "computer win!"
         :"player wins";

         console.log(result);




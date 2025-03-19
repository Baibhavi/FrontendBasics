function randomTwoDigitNums(){
    return Math.floor(Math.random()*90)+10;
}
let sum = 0;
for(let i = 0; i < 5;i ++){
    sum += randomTwoDigitNums();
}
let average = sum/5;
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2));
// BMI-calculator :- 

let weight = Number(prompt("Enter Your Weight In kg..."));

let height = Number(prompt("Enter Your Height In Meter..."))

let bmi = weight / (height**2);
console.log(`Your BMI is : ${bmi.toFixed(2)}`)

if(bmi<18.5)
{
    console.log("Category:Underweight")
}
else if(bmi>=18.5 && bmi<24.9)
{
    console.log("Category:Normal weight")
}
else if(bmi>=25 && bmi<29.9)
{
    console.log("Category:Over weight")
}
else 
{
    console.log("Category: Obese")
}
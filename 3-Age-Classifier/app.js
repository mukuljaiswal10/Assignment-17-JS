// Age-Classifier :- 

let age = Number(prompt("Enter A Age...."));
if(age>=0 && age<=2)
{
    console.log(age,"Infant")
}
if(age>=3 && age<=5)
{
    console.log(age,"Toddler")
}
if(age>=6 && age<=12)
{
    console.log(age,"Child")
}
if(age>=13 && age<=17)
{
    console.log(age,"Teenager")
}
if(age>=18)
{
    console.log(age,"Adult")
}
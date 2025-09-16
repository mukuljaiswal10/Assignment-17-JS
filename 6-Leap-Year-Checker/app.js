// Leap Year Checker :- 

let year = Number(prompt("Enter A Year....."))
if(year%400==0)
{
    console.log(year,"Leap-Year")
}
else if(year%100==0)
{
    console.log(year,"Not-Leap-Year")
}
else if (year%4==0) 
{
    console.log(year,"Leap-Year")
}

// second method :- 
let year2 = Number(prompt("Enter A Year..."))
if(year2%400==0)
{
    console.log(year2,"Leap-Year");
}
else if(year2%4==0 && year2%100!=0)
{
    console.log(year2,"Leap-Year");
}
else 
{
    console.log(year2,"Not-Leap-Year")
}

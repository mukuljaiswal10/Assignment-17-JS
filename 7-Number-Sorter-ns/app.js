// number sorter in ascending order :- 

let a = Number(prompt("Enter First Number..."));
let b = Number(prompt("Enter Second Number..."));
let c = Number(prompt("Enter Third Number..."));

if(isNaN(a) || isNaN(b) || isNaN(c))
{
    console.log("Please Enter A Valid Number")
}
else 
{
    if(a<=b && a<=c)
    {
        if(b<=c)
        {
            console.log(a,b,c)
        }
        else 
        {
            console.log(a,c,b)
        }
    }
    else if(b<=a && b<=c)
    {
        if(a<=c)
        {
            console.log(b,a,c)
        }
        else 
        {
            console.log(b,c,a)
        }
    }
    else 
    {
        if(a<=b)
        {
            console.log(c,a,b)
        }
        else 
        {
            console.log(c,b,a)
        }
    }
}

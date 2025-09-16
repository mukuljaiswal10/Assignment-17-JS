// Voting Eligibility :-

let age = Number(prompt("Enter A Age...."));
if (age>=0 && age<=17)
{
    console.log(age,"You Are Not Eligible For Votinig");
}
if (age>=18)
{
    console.log(age,"You Are Eligible For Votinig");
}
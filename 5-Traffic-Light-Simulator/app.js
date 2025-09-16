// Traffic-Light-Simulator :-
let light = prompt("Enter A Traffic Signal Light Name")
if (light==="red" || light==="Red" || light==="RED")
{
    console.log(light , "PLease Stop Your Vehicles")
}
else if (light==="yellow" || light==="Yellow" || light==="YELLOW")
{ 
    console.log(light, "Please Start Your Vehicles")
}
else if (light==="green" || light==="Green" || light==="GREEN")
{ 
    console.log(light, "Please Go")
}
else 
{
    console.log(light, " You Enter A Wrong Traffic Light System")
}
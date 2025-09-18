// temperature converter :- 

let cel = Number(prompt("Enter Temperature In Calsius..."));
let threshold = 30;

if(cel>threshold)
{
    let fren = (cel * 9/5)+32
    console.log(`${cel} deg celcius is above threshold.Converted to fahrenheit : ${fren} deg F`);
}
else 
{
    let kelvin = celcius + 273.15;
    console.log(`${cel} deg Celsius is below or equal to threshold. converted to kelvin : ${kelvin}`);
    
}
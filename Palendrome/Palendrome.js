function checkPalendrome()
{
    var val = document.getElementById('val').value;

    var reverseVal = val.split("").reverse().join("");

    if (val.toUpperCase() == reverseVal.toUpperCase)
    {
        alert("Your value is a palendrome");
    }
    else
    {
        alert("Your value is not a palendrome");
    }
}
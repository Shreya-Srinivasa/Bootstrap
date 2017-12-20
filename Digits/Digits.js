function checkDigits()
{
    var val = document.getElementById('val').value;

    var digitCount = val.replace(/\D/g, '').length;

    if (digitCount > 0) {
        alert("Your value contains " + digitCount + " numbers");
    }
    else {
        alert("Your value does not contain any number");
    }
}
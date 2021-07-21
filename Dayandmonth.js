
// Day and month range check 
{
    let month = prompt('Enter a month: ');
    let day = prompt('Enter day: ');
    let isInDateRange = false;
    if (month == 'March' && day >= 20) {
        isInDateRange = true;
    }
    if (month == 'April' || month == 'May') {
        isInDateRange = true;
    }
    if (month == 'June' && day <= 20) {
        isInDateRange = true;
    }
console.log("The given day and month is in range - " + isInDateRange);
}
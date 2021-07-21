/* finding the leap year using java script */

    let year = prompt("Enter the year: ");
    let isLeapYear = false;
    if (year > 999 && year <= 9999) {
        if (year % 4 == 0) {
            if (year % 100 != 0) {
                isLeapYear = true;
            }
            if (year % 400 == 0) {
                isLeapYear = true;
            }
        }
    }
    console.log("the given leap year  is- " + isLeapYear);

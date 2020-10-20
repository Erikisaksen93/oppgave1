function isDateValid(dato) {
    return (textLength(dato) && 
    dots(dato) && 
    validYear(dato) && 
    validMonth(dato) &&
    validDay(dato)
    );
};

function textLength(dato) {
    return dato.length == 10;
};

function dots(dato) {
    return dato.charAt(2) == "." && dato.charAt(5) == '.';
};

function isLeapYear(year) {
     return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
};

function validYear(dato) {
    var year = dato.substr(6,4);
    return year.length === 4 && year >= '0000' && year <= '9999';
};

function validMonth(dato) {
    var month = dato.substr(3,2);
    return month.length === 2 && month > '00' && month <= '12';
};


function validDay(dato) {
    var day = dato.substr(0,2);
    var month = dato.substr(3,2);
    year = dato.substr(6,4);

    if (month == '02' && day !=='29') {
        return day.length === 2 && day >= '01' && day <= '28';
    } else if (month == '02' && day == '29' && isLeapYear(year)) {
        return day.length === 2 && day >= '01' && day <= '29';
    } else if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12') {
        return day.length === 2 & day >= '01' && day <= '31';
    } else if (month !== '02') {
        return day.length === 2 && day >= '01' && day <= '30';
    } else {
        return false;
    }
};






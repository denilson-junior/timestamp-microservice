function dateTimeToUNIX(date) {
    if (isNaN(parseInt(date))) {
        date += "T00:00:00.000Z"
    } else {
        date = parseInt(date)
    }

    let convertedDate = new Date(date)
    let dateToUNIX = convertedDate.getTime();

    if (convertedDate instanceof Date && !isNaN(convertedDate.getTime())) {
        return dateToUNIX    
    }

    return "Invalid Date";
}

function dateToUTC(date) {
    if (isNaN(parseInt(date))) {
        date += "T00:00:00.000Z"
    } else {
        date = parseInt(date)
    }

    let convertedDate = new Date(date)
    let dateToUTC = convertedDate.toUTCString();

    if (convertedDate instanceof Date && !isNaN(convertedDate.getTime())) {
        return dateToUTC    
    }

    return "Invalid Date";   
}

export { dateTimeToUNIX, dateToUTC };

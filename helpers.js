function dateTimeToUNIX(date) {
    // Check if the date is a valid number (potential Unix timestamp)
    if (!isNaN(date) && typeof date === 'string' && !date.includes('-')) {
        date = parseInt(date);  // Convert to an integer if it's a number string
    }

    let convertedDate = new Date(date);  // Let new Date() handle parsing
    let dateToUNIX = convertedDate.getTime();

    // Check if the date is valid and meets the expected length
    if (convertedDate instanceof Date && !isNaN(dateToUNIX)) {
        return dateToUNIX;  // Return UNIX timestamp
    }

    return "Invalid Date";
}

function dateToUTC(date) {
    // Check if the date is a valid number (potential Unix timestamp)
    if (!isNaN(date) && typeof date === 'string' && !date.includes('-')) {
        date = parseInt(date);  // Convert to an integer if it's a number string
    }

    let convertedDate = new Date(date);  // Let new Date() handle parsing
    let dateToUTC = convertedDate.toUTCString();

    // Check if the date is valid
    if (convertedDate instanceof Date && !isNaN(convertedDate.getTime())) {
        return dateToUTC;  // Return UTC string
    }

    return "Invalid Date";
}

// Remove the need for verifyCharactersInDateString as new Date() handles various formats

export { dateTimeToUNIX, dateToUTC };

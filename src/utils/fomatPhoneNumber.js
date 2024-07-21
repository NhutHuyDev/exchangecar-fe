export function formatPhoneNumber(phoneNumber) {
    // Remove the country code and the plus sign
    let localNumber = phoneNumber.replace("+84", "");
    
    // Insert spaces in the local number
    let formattedNumber = localNumber.slice(0, 4) + ' ' + localNumber.slice(4, 7) + ' ' + localNumber.slice(7);
    
    return formattedNumber;
}

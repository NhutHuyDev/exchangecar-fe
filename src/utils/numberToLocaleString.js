const numberToLocaleString = (number) => {
    if (number === '') {
        return '0'
    } else {
        return parseInt(number).toLocaleString()
    }
}

export default numberToLocaleString
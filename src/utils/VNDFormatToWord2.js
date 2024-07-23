const VNDFormatToWord2 = (amount) => {
    const money = Math.round(amount)

    if (money > 1000) {
        return parseFloat(money)/1000 + ' billion'
    } else {
        return money + ' million'
    }
}

export default VNDFormatToWord2


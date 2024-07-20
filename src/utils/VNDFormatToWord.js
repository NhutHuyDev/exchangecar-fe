const VNDFormatToWord = (amount) => {
    const money = Math.round(amount)

    const moneyToString = money.toString()

    const billionPart = moneyToString.slice(0, -3);

    const millionPart = moneyToString.substring(moneyToString.length - 3, moneyToString.length)

    return { billionPart: parseInt(billionPart), millionPart: parseInt(millionPart) }
}

export default VNDFormatToWord


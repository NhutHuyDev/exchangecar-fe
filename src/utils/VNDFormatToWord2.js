const VNDFormatToWord2 = (amount) => {
    const money = Math.round(amount)

    if (money > 1000) {
        return parseFloat(money)/1000 + ' tỷ'
    } else {
        return money + ' triệu'
    }
}

export default VNDFormatToWord2


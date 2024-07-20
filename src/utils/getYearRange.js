const getYearRange = (minYear, maxYear) => {
    const array = []
    for (let index = minYear; index <= maxYear; index++) {
        array.push(index.toString())
    }

    return array
}

export default getYearRange 
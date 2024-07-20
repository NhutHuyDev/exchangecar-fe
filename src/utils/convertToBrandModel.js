const brandModelCarData = {
    honda: ['crv', 'civic', 'jazz'],
    toyota: ['camry', 'fortuner', 'land cruiser', 'vios', 'innova', 'corrolla cross'],
    ford: ['everest', 'ranger', 'ecosport', 'ranger raptor'],
    mazda: ['3', '6', 'cx8', 'cx5']
}

const convertToBrandModel = (brandFilterArray = [], modelFilterArray = []) => {
    let brandModelObject = {}

    for (let x = 0; x < brandFilterArray.length; x++) {
        const brand = brandFilterArray[x]
        const models = []

        for (let y = 0; y < modelFilterArray.length; y++) {
            const model = modelFilterArray[y]
            console.log(brandModelCarData.hasOwnProperty(brand))
            if (brandModelCarData.hasOwnProperty(brand)
                && brandModelCarData[brand].includes(model.toLowerCase())) {
                models.push(model)
            }
        }

        brandModelObject = { ...brandModelObject, [brand]: models }
    }

    return brandModelObject
}

export default convertToBrandModel
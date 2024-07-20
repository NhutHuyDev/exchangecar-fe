const brandModelOjectToArray = (brandModelObject = {}) => {
    let brandModelArray = []

    for (const brand in brandModelObject) {
        if (Object.hasOwnProperty.call(brandModelObject, brand)) {
            const models = brandModelObject[brand];
            if (models.length) {
                for (let index = 0; index < models.length; index++) {
                    const model = models[index];
                    const brandModelItem = brand + ' ' + model
                    brandModelArray.push(brandModelItem)
                }
            } else {
                brandModelArray.push(brand)
            }
        }
    }

    return brandModelArray
}

export default brandModelOjectToArray
const brandModelOjectToArray = (brandModelObject = {}, car_brand = null) => {
    let brandModelArray = []

    for (const brand in brandModelObject) {
        if (Object.hasOwnProperty.call(brandModelObject, brand)) {
            const models = brandModelObject[brand];
            if (models.length) {
                for (let index = 0; index < models.length; index++) {
                    const model = models[index];
                    const brandModelItem = car_brand?.options[brand]?.value 
                    + ' ' + car_brand?.options[brand]?.car_model?.options[model]
                    brandModelArray.push(brandModelItem)
                }
            } else {
                brandModelArray.push(car_brand?.options[brand]?.value)
            }
        }
    }

    return brandModelArray
}

export default brandModelOjectToArray
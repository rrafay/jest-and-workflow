exports.translate = (string) => {
    return string.split("").reverse().join("");
}




exports.bodyMassIndex = (weight, height) => {
    height = height * height
    return weight / height
}

exports.poundsToKg = (pounds) =>{
    return pounds / 2.205

}


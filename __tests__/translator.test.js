const {translate} = require('../js/translator')
const {bodyMassIndex} = require('../js/translator')
const {poundsToKg} = require('../js/translator')

test('reverses a string', () => {
    expect(translate("yafar")).toBe("rafay")

})

test('returns BMI', () =>{
    expect(bodyMassIndex(71, 1.80)).toBe(21.91358024691358)
})

test('returns weight in KG', () => {
    expect(poundsToKg(1)).toBe(0.4535147392290249)

})
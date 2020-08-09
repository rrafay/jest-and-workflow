import {Formulas} from '../js/translator'
import {myCall} from '../js/translator'
const method = new Formulas()
const unsplash = new myCall()
import mockAxios from 'axios'


test('reverses a string', () => {
    expect(method.translate("yafar")).toBe("rafay")

})

test('returns BMI', () =>{
    expect(method.bodyMassIndex(71, 1.80)).toBe(21.91358024691358)
})

test('returns weight in KG', () => {
    expect(method.poundsToKg(1)).toBe(0.4535147392290249)

})


it("calls axios and returns images", async () => {
    mockAxios.get.mockImplementationOnce(() => 
    Promise.resolve({
        data: {
            results : ["cute.jpg"]
        }
    }))

    const images = await unsplash.myfunc("kittens")
    expect(images).toEqual(["cute.jpg"])
})
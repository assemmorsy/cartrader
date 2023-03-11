import cars from "@/data/cars.json"
export default defineEventHandler((event) => {
    const { city } = event.context.params;
    const { make, maxPrice, minPrice } = getQuery(event)
    let filteredCars = cars.filter((car) => {

        return car.city.toLowerCase() === city.toLowerCase()
    })
    if (make)
        filteredCars = cars.filter((car) => {
            return car.make.toLowerCase() === make.toLowerCase()
        })
    if (maxPrice && isFinite(maxPrice)) {
        let maxPriceParsed = parseFloat(maxPrice)
        filteredCars = cars.filter((car) => {
            return car.price <= maxPriceParsed
        })
    }
    if (minPrice && isFinite(minPrice)) {
        let minPriceParsed = parseFloat(minPrice)
        filteredCars = cars.filter((car) => {
            return car.price >= minPriceParsed
        })
    }
    return filteredCars
})
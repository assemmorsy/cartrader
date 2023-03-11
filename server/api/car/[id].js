import cars from "@/data/cars.json"
export default defineEventHandler((event) => {
    const { id } = event.context.params
    if (id && isFinite(id))
        return cars.find((car) => {
            return car.id === parseInt(id)
        })
    throw createError({
        statusCode: 404,
        message: `car with the id : ${id} can't be found`
    })
})
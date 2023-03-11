export default (city: string, filters: Object) => {
    const { data, error } = useFetch(`/api/cars/${city}`, {
        params: { ...filters }
    })
    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Unable to fetch cars"
        })
    }
    return data;
}
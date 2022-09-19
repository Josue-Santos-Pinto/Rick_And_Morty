type Item = {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: null | string
    },
    results: {
        id: number,
        name: string,
        air_date: Date,
        episode: string,
        character:[]
}
}
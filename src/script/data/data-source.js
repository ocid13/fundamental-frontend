class DataSource {
    static searchGame(keyword) {
        const keyAPI = 'a1e460d6cb4a0e6d5bc3e8a154792f5c'
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${keyAPI}&language=en-US&query=${keyword}`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            if(responseJson.results.length){
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`"${keyword}" is not found.`);
            }
        })
    }
}

export default DataSource
export const api = {
    get: async url => fetch(url)
        .then(response => response.json())
        .then(json => json.data)
}

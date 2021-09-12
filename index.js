const axios = require("axios").default;
const baseURL = "https://api.publicapis.org/";
var ServiceFilters = {
    title: null,
    description: null,
    auth: null,
    https: null,
    cors: null,
    category: null,
}
module.exports = {
    /**
     * 
     * @param {ServiceFilters} [filters] 
     * @returns {Promise<{
     *      count: number,
     *      entries: {API: string, Description: string, Auth: string, HTTPS: boolean, Cors: string, Link: string, Category: string}[]
     * }>}
     */
    async GetEntries(filters = {}) {
        let url = `${baseURL}entries${Object.keys(filters).map((d) => {
            if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
            return `&${d}=${filters[d]}`
        }).join()}`
        return axios({
            method: "GET",
            url: url,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * 
     * @param {ServiceFilters} [filters] 
     * @returns {Promise<{
     *      count: number,
     *      entries: {API: string, Description: string, Auth: string, HTTPS: boolean, Cors: string, Link: string, Category: string}[]
     * }>}
     */
    async GetRandom(filters = {}) {
        let url = `${baseURL}random${Object.keys(filters).map((d) => {
            if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
            return `&${d}=${filters[d]}`
        }).join()}`
        return axios({
            method: "GET",
            url: url,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * 
     * @returns {Promise<string[]>}
     */
    async GetCategories() {
        return axios({
            method: "GET",
            url: `${baseURL}categories`,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * 
     * @returns {Promise<{alive: boolean}>}
     */
    async CheckHealth() {
        return axios({
            method: "GET",
            url: `${baseURL}health`,
            headers: {
                "Accept": "application/json"
            }
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
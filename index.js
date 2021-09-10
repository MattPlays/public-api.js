const fetch = require("node-fetch")
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
     * @param {ServiceFilters} filters 
     * @returns {Promise<{
     *      count: number,
     *      entries: {API: string, Description: string, Auth: string, HTTPS: boolean, Cors: string, Link: string, Category: string}[]
     * }>}
     */
    GetEntries(filters = {}) {
        let url = `${baseURL}entries${Object.keys(filters).map((d) => {
            if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
            return `&${d}=${filters[d]}`
        }).join()}`
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Accept": "application/json"
            }
        }).then((data) => data.json()).then((data) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * 
     * @param {ServiceFilters} filters 
     * @returns {Promise<{
     *      count: number,
     *      entries: {API: string, Description: string, Auth: string, HTTPS: boolean, Cors: string, Link: string, Category: string}[]
     * }>}
     */
    GetRandom(filters = {}) {
        let url = `${baseURL}random${Object.keys(filters).map((d) => {
            if(Object.keys(filters).indexOf(d) == 0) return `?${d}=${filters[d]}`
            return `&${d}=${filters[d]}`
        }).join()}`
        return fetch(url, {
            "method": "GET",
            "headers": {
                "Accept": "application/json"
            }
        }).then((data) => data.json()).then((data) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * 
     * @returns {Promise<string[]>}
     */
    GetCategories() {
        return fetch(`${baseURL}categories`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json"
            }
        }).then((data) => data.json()).then((data) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    },
    /**
     * 
     * @returns {Promise<{alive: boolean}>}
     */
    CheckHealth() {
        return fetch(`${baseURL}health`, {
            "method": "GET",
            "headers": {
                "Accept": "application/json"
            }
        }).then((data) => data.json()).then((data) => {
            return data;
        }).catch((err) => {throw new Error(err)});
    }
}
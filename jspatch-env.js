// jspatch-env.js
const axios = require('axios');

global.$fetch = {
    get: async (url, options = {}) => {
        try {
            const response = await axios.get(url, options);
            return { data: response.data };
        } catch (error) {
            console.error('Fetch Error:', error.message);
            return { data: null };
        }
    },
};

global.$cache = {
    storage: {},
    get: (key) => {
        console.log(`[Cache GET]: ${key}`);
        return global.$cache.storage[key];
    },
    set: (key, value) => {
        console.log(`[Cache SET]: ${key} = ${value}`);
        global.$cache.storage[key] = value;
    },
};

global.argsify = (str) => {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.error('JSON Parse Error:', e);
        return {};
    }
};

global.jsonify = (obj) => JSON.stringify(obj, null, 2);

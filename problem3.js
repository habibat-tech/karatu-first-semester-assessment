
function deepFreeze(obj) {
    // Stop if the value is not an object or is null
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Freeze all nested objects first
    for (const value of Object.values(obj)) {
        deepFreeze(value);
    }

    // Freeze the current object
    return Object.freeze(obj);
}

// Test the function
const config = {
    api: {
        baseUrl: "https://x.com",
        retries: 3
    },
    debug: false
};

deepFreeze(config);

config.api.baseUrl = "https://changed.com";
config.debug = true;

console.log(config.api.baseUrl, config.debug);
// Expected: https://x.com false

console.log(Object.isFrozen(config.api));
// Expected: true


function diffobjects(oldobj, newobj) {
    const added = {};
    const removed = {};
    const changed = {};

    for (const key of Object.keys(newobj)) {
        if (!Object.prototype.hasOwnProperty.call(oldobj, key)) {
            added[key] = newobj[key];
        } else if (oldobj[key] !== newobj[key]) {
            changed[key] = {
                from: oldobj[key],
                to: newobj[key]
            };
        }
    }

    for (const key of Object.keys(oldobj)) {
        if (!Object.prototype.hasOwnProperty.call(newobj, key)) {
            removed[key] = oldobj[key];
        }
    }

    return { added, removed, changed };
}

// Test the function
const oldobj = {
    name: "Setemi",
    role: "Engineer",
    country: "Jamaica"
};

const newobj = {
    name: "Setemi",
    role: "Senior Engineer",
    city: "Kingston"
};

console.log(diffobjects(oldobj, newobj));

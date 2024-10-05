// task06.js
//Write an objectsDeeplyEqual function that:
//✓ takes two arguments ;
//✓ returns true only if:
//– they have the same value ;
//– or they are objects with the same properties whose values are also equal when com-
//pared with a recursive call to objectsDeeplyEqual ;
//✓ is exported and contained in a task06.js file

function objectsDeeplyEqual(cmp1, cmp2) {
    if (cmp1 === cmp2) {
        return true;
    }

    if (typeof cmp1 !== 'object' || typeof cmp2 !== 'object' || cmp1 === null || cmp2 === null) {
        return false;
    }

    var keys1 = Object.keys(cmp1);
    var keys2 = Object.keys(cmp2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (var i = 0; i < keys1.length; i++) {
        var key = keys1[i];

        if (!objectsDeeplyEqual(cmp1[key], cmp2[key])) {
            return false;
        }
    }

    return true;
}

module.exports = {
    objectsDeeplyEqual: objectsDeeplyEqual
};

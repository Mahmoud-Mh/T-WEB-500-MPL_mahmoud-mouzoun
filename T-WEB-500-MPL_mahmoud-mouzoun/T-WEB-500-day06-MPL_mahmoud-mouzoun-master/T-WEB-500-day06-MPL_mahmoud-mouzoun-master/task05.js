// task05.js
//Write a range function that:
//✓ takes 3 integers as arguments (start, end and step) ;
//✓ returns an array containing all the numbers from start up to end included ;
//✓ with an increment corresponding to the optional third argument step (increment = 1 if step
//not provided)
//✓ is exported and contained in a task05.js file.

function range(start, end, step) {
    if (step === undefined) {
        step = 1;
    }

    var result = [];
    var i;

    if (step > 0) {
        for (i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    else if (step < 0) {
        for (i = start; i >= end; i += step) {
            result.push(i);
        }
    }

    return result;
}

module.exports = {
    range: range
};

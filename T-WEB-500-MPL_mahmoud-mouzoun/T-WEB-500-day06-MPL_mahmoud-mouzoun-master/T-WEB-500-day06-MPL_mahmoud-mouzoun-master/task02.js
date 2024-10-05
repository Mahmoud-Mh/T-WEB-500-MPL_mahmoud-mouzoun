// task02.js
//Write a function arraysAreEqual that:
//✓ takes two arrays as arguments ;
//✓ returns true if both arrays are equal, false otherwise.,
//✓ is exported and contained in a task02.js file.

export function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

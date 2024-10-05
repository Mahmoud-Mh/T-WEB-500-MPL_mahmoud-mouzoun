// task03.js
//Write a countGs function that:
//✓ takes a string as parameter ;
//✓ returns the number of uppercase ‘G’ characters it contains.
//✓ is exported and contained in a task03.js file

export function countGs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'G') {
            count++;
        }
    }
    return count;
}

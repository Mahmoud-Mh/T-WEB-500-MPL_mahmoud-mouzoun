// task07.js
//Write a arrayFiltering function that:
//✓ takes two arguments, array and test ;
//✓ test is a function returning a boolean ;
//✓ returns a new array, containing some filtered values ;
//✓ calls the test function for each element contained in array ;
//✓ returns only values for which test returned True ;
//✓ is exported and contained in a task07.js file.


function arrayFiltering(array, test) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        if (test(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

module.exports = {
    arrayFiltering: arrayFiltering
};

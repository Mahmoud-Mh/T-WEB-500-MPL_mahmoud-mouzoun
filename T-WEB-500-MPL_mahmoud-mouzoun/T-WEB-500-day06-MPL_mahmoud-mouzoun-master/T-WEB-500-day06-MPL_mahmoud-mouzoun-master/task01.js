// task01.js
//Write a function drawTriangle that:
//✓ takes one parameter ;
//✓ draws a triangle on the standard output ;
//✓ uses one parameter corresponding to the triangle height (see below) ;
//✓ is exported and contained in a task01.js file.

export function drawTriangle(height) {
    for (let i = 1; i <= height; i++) {
        console.log('$'.repeat(i));
    }
}

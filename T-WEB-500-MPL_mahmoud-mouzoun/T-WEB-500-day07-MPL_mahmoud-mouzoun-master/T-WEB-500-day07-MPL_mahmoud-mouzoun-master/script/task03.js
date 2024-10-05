var button = document.querySelector("footer div");
let char = []


document.addEventListener('keyup', function(e) {
    const key = e.key;

    if (key.length === 1 ){
        char.push(key);
        if (char.length > 42) {
            char.shift();
        }
    }

    button.innerHTML = char.join(" ");

});


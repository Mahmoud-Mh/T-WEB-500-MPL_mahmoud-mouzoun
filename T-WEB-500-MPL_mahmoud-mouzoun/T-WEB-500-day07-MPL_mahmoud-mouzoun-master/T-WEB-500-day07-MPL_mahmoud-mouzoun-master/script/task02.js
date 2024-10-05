var count = 0;
var output = document.querySelector('footer div');
function countClicks(){
    count = count + 1 ;
    output.innerHTML = count;
}

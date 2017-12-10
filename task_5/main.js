

var block = document.getElementById('block');



block.addEventListener('click', function (e) {
var top = parseInt(block.style.top) || 0;
    console.dir(block);
    block.style.top= top + 100 + 'px'
}, false);
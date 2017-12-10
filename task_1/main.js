
var block =document.getElementById('block'),
out=document.getElementById('out');

block.addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);
    out.innerHTML=' координаты по оси х = '+ e.offsetX + '<br>' + 'координаты по оси y = ' + e.offsetY


}, false);
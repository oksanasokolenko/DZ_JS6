

var block = document.getElementById('block'),
image = document.getElementsByClassName('change_image');
for (var i =0; i<image.length; i++){

image[i].addEventListener('click', function (e) {

    block.style.backgroundImage='url('+this.src+')'
}, false);
};
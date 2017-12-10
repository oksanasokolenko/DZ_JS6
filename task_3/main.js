for (var i = 0; i < 400; i++) {
    var block = document.createElement('div');

    block.className = 'block';


    block.addEventListener('mouseenter', function (e) {
        this.className += ' round';


    }, false);
    block.addEventListener('mouseleave', function (e) {
        this.className = 'block';


    }, false);

    document.body.appendChild(block);
}
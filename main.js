function ruler() {
    //Load elements
    document.body.insertAdjacentHTML('afterbegin', '<div class="line" id="y-line"></div><div id="plugin-container"><div class="line" id="x-line"></div>');

    let xLine = document.getElementById('x-line');
    let yLine = document.getElementById('y-line');

    const onMouseMove = (e) => {
        xLine.style.left = e.pageX + 'px';
        yLine.style.top = e.pageY + 'px';
    }

    document.addEventListener('mousemove', onMouseMove);

}

function destroyAll(){
    document.getElementById('x-line').remove();
    document.getElementById('y-line').remove();
    document.getElementById('plugin-container').remove();
}

document.addEventListener("keydown", (event) =>{
   if ((event.ctrlKey || event.metaKey) && event.key === "x"){
       destroyAll();
   }
});

document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "q") {
        ruler();
    }
});


//api key: B1szoHtBc9l1gFsCgIXlBZ0WlB8FM7L6
window.onload = function(){
var result = document.querySelector('#result');
var form = document.querySelector('#form');
var text = document.querySelector('#text');
form.addEventListener('submit', function (event){
    event.preventDefault();
    var sBar = text.value;

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load' , reqListener);
    oReq.open('get' , 'http://api.giphy.com/v1/gifs/search?q='+sBar+'&api_key=B1szoHtBc9l1gFsCgIXlBZ0WlB8FM7L6');
    oReq.send();

    function reqListener(){
        var data = JSON.parse(this.responseText);
        var gifs = document.querySelectorAll('.image');
        console.log(gifs);
        for(var i = 0; i<gifs.length; i++){
            gifs[i].remove();
        }
        for (var i = 0; i<data.data.length; i++) {
        var image = document.createElement('img');
        image.className = 'image';
        image.src = data.data[i].images.downsized.url;
        result.appendChild(image);
    // ^^^ calls the url of the image,creates an element for each image, and displays the image on the screen
    } 
}
});
}


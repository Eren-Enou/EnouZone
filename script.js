var path = require('path');
var fs = require('fs');

//create a collection of all images
var images = document.images;
//Access the first image in the doc, start from there.
var image = images[0];
//create new image
var downloadingImage = new Image();
//when downloaded image loads, change first image in doc to downlaoded image source
downloadingImage.onload = function(){
    image.src = this.src;
}
//change downloaded image source
downloadingImage.src = '/aoT/Pages/page1.jpg';
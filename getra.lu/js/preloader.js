 var images = document.images,
     images_count = images.length,
     images_loaded = 0,
     display = document.getElementById('perc'),
     preloader = document.getElementById('preloader');

 for (let i = 0; i < images_count; i++) {
     image_clone = new Image();
     image_clone.onload = image_loaded;
     image_clone.onerror = image_loaded;
     image_clone.src = images[i].src;

 }

 function image_loaded() {
     images_loaded++;
     display.innerHTML = (((100 / images_count) * images_loaded) << 0) + '%';


     if (images_loaded >= images_count) {
         if (!preloader.classList.contains('done')) {
             preloader.classList.add('done')
         }

     }
 }




























 function test() {
     var preloader = document.getElementById('preloader');
     if (!preloader.classList.contains('done')) {
         preloader.classList.add('done')
     }
 }
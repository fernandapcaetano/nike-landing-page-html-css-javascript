// Get the elements
var productPhotos = document.querySelectorAll('.product__photos img');
var mainProductPhoto = document.querySelector('.product__carrousel img');

// Add click event listeners to each product photo
productPhotos.forEach(function (photo) {
    photo.addEventListener('click', function () {
        // Update the source of the main product photo
        mainProductPhoto.src = photo.src;
    });
});

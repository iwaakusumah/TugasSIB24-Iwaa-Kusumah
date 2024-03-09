var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 10000); // Ubah angka 2000 menjadi waktu dalam milidetik (misalnya 4000 untuk 4 detik)
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
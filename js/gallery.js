const photos = [

"assets/images/img1.jpeg",
"assets/images/img2.jpeg",
"assets/images/img3.jpeg",
"assets/images/img4.jpeg",
"assets/images/img5.jpeg",
"assets/images/img6.jpeg",
"assets/images/img7.jpeg",
"assets/images/img8.jpeg",
"assets/images/img9.jpeg",
"assets/images/img10.jpeg",
"assets/images/img11.jpeg",
"assets/images/img12.jpeg",
"assets/images/img13.jpeg",
"assets/images/img14.png",
"assets/images/img15.jpeg",
"assets/images/img16.jpeg",
"assets/images/img17.jpeg",
"assets/images/img18.jpeg",
"assets/images/img19.jpg",
"assets/images/img20.jpg"

];

const gallery =
document.getElementById("gallery-grid");

photos.forEach(photo => {

gallery.innerHTML += `

<a
href="${photo}"
class="gallery-item glightbox"
data-gallery="portfolio-gallery"
>

<img
src="${photo}"
alt="Photography Collection"
/>

</a>

`;

});

GLightbox({
  selector: ".glightbox"
});
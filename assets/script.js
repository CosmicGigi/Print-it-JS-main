const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;

const imgBanner = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const rightArrow = document.querySelector('.arrow_right');
const leftArrow = document.querySelector('.arrow_left');

slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('dot_selected');
    dot.addEventListener('click', () => {
        currentSlide = i;
		updateBanner();
    });
    dotsContainer.appendChild(dot);
});

const updateBanner = () => {
	imgBanner.src = slides[currentSlide].image;
    tagLine.innerHTML = slides[currentSlide].tagLine;
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === currentSlide);
    });
};

// Ajoute des écouteurs d'événements aux flèches
rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    console.log('click droit');
	updateBanner();
});

leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    console.log('click gauche');
	updateBanner();
});
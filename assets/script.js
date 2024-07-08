const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//currentSlide avec i fixé à zéro (1)
let currentSlide = 0;

//constante pour mes images dans la bannière
const imgBanner = document.querySelector('.banner-img');
//constante pour les taglines
const tagLine = document.querySelector('#banner p');
//constante pour les bullet pointer
const dotsContainer = document.querySelector('.dots');
//constante pour les flèches gauche et droite
const rightArrow = document.querySelector('.arrow_right');
const leftArrow = document.querySelector('.arrow_left');

// Ajout des dots //

//boucle forEach (callback function) pour parcourir chaque élément du array (tableau 'slides')
//underscore représente chaque diapositive dans slides, mais je n'utilise pas cette information directement dans la boucle.
//Au lieu de l'appeler slides ou element, je l'appelle '_' pour indiquer que ce paramètre est intentionnellement ignoré.
// i (index) est utilisé pour créer les points de navigation et les associer aux diapositives.
//création d'une div 'dot' (présente dans mon css)
//class.list.add 'dot' pour ajouter cette classe à mon code
// si i égale zéro, ajout de la classe 'dot_selected' et donc dot plein

slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('dot_selected');
    dot.addEventListener('click', () => {
        currentSlide = i;
    });
    dotsContainer.appendChild(dot);
});

// Ajoute des écouteurs d'événements aux flèches
rightArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    console.log('click droit');
});

leftArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    console.log('click gauche');
});

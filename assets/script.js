//tableau contenant chaques objets (image + tagline)
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

//variable currentSlide avec i initialisée à zéro (1)
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
//i===0, ajout de la classe 'dot_selected' au premier point de nav et donc dot plein
//'dotsContainer.appendChild(dot)' : Ajoute chaque point de navigation au conteneur de points.

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

//imgBanner.src ... Met à jour l'attribut src de l'image de la bannière pour afficher l'image de la diapositive actuelle.
//tagLine.innerHTML ... Met à jour le texte de la bannière pour afficher la tagline de la diapositive actuelle.
//document.querySelectorAll('.dot').forEach ... Parcourt tous les points de navigation et met à jour leur état (dot_selected) en fonction de currentSlide
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
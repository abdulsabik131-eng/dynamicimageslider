// ======== IMAGE ARRAY ========
// You can easily add or remove images from here.
const imageSources = [
	"images/image1.jpeg",
	"images/image2.jpeg",
	"images/image3.jpeg",
	"images/image4.jpeg",
	"images/image5.jpeg",
	"images/image6.jpeg",
	"images/image7.jpeg",
	"images/image8.jpg"
];

// ======== VARIABLES ========
let currentIndex = 0;
let timer;
const slidesContainer = document.getElementById("slides");
const dotsContainer = document.getElementById("dots");

// ======== LOAD IMAGES DYNAMICALLY ========
function loadImages() {
	imageSources.forEach((src, index) => {
		const img = document.createElement("img");
		img.src = src;
		if (index === 0) img.classList.add("active");
		slidesContainer.appendChild(img);

		// Create dot
		const dot = document.createElement("span");
		if (index === 0) dot.classList.add("active");
		dot.addEventListener("click", () => moveToSlide(index));
		dotsContainer.appendChild(dot);
	});
}

// ======== SHOW SELECTED SLIDE ========
function showSlide(index) {
	const slides = document.querySelectorAll(".slides img");
	const dots = document.querySelectorAll(".dots span");

	slides.forEach((slide) => slide.classList.remove("active"));
	dots.forEach((dot) => dot.classList.remove("active"));

	slides[index].classList.add("active");
	dots[index].classList.add("active");
}

// ======== NEXT SLIDE ========
function nextSlide() {
	currentIndex = (currentIndex + 1) % imageSources.length;
	showSlide(currentIndex);
}

// ======== PREVIOUS SLIDE ========
function prevSlide() {
	currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
	showSlide(currentIndex);
}

// ======== MOVE TO SPECIFIC SLIDE ========
function moveToSlide(index) {
	currentIndex = index;
	showSlide(currentIndex);
	resetAutoSlide();
}

// ======== AUTO SLIDE FUNCTION ========
function autoSlide() {
	timer = setInterval(nextSlide, 3000); // 3 seconds interval
}

// ======== RESET AUTO SLIDE ON MANUAL CLICK ========
function resetAutoSlide() {
	clearInterval(timer);
	autoSlide();
}

// ======== BUTTON EVENT LISTENERS ========
document.getElementById("nextBtn").addEventListener("click", () => {
	nextSlide();
	resetAutoSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
	prevSlide();
	resetAutoSlide();
});

// ======== INITIALIZE ========
window.onload = () => {
	loadImages();
	autoSlide();
};

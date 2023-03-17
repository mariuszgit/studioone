document.addEventListener('DOMContentLoaded', function() {

	const hamburger = document.querySelector('.c-nav__hamburger');
	const nav = document.querySelector('.c-nav__list');
	const buttons = document.querySelectorAll('.c-btn');

	const handleClick = () => {
		hamburger.classList.toggle('c-nav__hamburger--active');
		nav.classList.toggle('c-nav__list--active');
	};
	for (const btn of buttons) {
		btn.addEventListener('click', function() {
			// btn.style.color = "orange"
		});
		}
	
    hamburger.addEventListener('click', handleClick);
    
});

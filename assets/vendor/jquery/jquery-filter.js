window.addEventListener('load', function () {
	var iso = new Isotope('.portfolio-container', {
	  itemSelector: '.portfolio-item',
	  layoutMode: 'fitRows',
	  filter: '.filter-vinyl' //
	});
  
	// Filter click handler
	const filterButtons = document.querySelectorAll('#portfolio-flters li');
	filterButtons.forEach(btn => {
	  btn.addEventListener('click', function () {
		filterButtons.forEach(b => b.classList.remove('filter-active'));
		this.classList.add('filter-active');
		const filterValue = this.getAttribute('data-filter');
		iso.arrange({ filter: filterValue });
	  });
	});
  });
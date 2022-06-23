$(document).ready(function () {
	$('.header-burger').click(function (event) {
		$('.header-burger,.header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.popup-closed').click(function (event) {
		$('.popup').toggleClass('close-popup');
		$('body').toggleClass('lock');
	});
});
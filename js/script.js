$(document).ready(function () {
	$('.header-burger').click(function (event) {
		$('.header-burger,.header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.popup-close').click(function (event) {
		$('.popup').toggleClass('popup-off');
	});
});
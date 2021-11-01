$(function() {
	$("#nav li ul").hide();
	$("#nav li").hover(function() {
		$(">ul:not(:animated)",this).stop(true).slideDown("slow");
	}, function() {
		$(">ul",this).stop(true).slideUp("slow");
	});

	function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById('js-hamburger');
  var blackBg = document.getElementById('js-black-bg');

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();
});



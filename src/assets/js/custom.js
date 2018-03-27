
/* ---------------------------------------------- /*
 * Preloader
/* ---------------------------------------------- */

jQuery(window).load(function () {
	jQuery('#status').fadeOut();
	jQuery('#preloader').delay(350).fadeOut('slow');
});

jQuery(document).ready(function () {

	var duration = 6000;
	var cityInfoCounter = 0

	jQuery('body').scrollspy({
		target: '.navbar-custom',
		offset: 50
	})

	jQuery(document).on('click', '.navbar-collapse.in', function (e) {
		if (jQuery(e.target).is('a') && jQuery(e.target).attr('class') != 'dropdown-toggle') {
			jQuery(this).collapse('hide');
		}
	});

	jQuery('a[href*=#]').bind("click", function (e) {
		var anchor = jQuery(this);
		jQuery('html, body').stop().animate({
			scrollTop: jQuery(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});

	/* ---------------------------------------------- /*
	 * Background images
	/* ---------------------------------------------- */

	jQuery('#intro').backstretch([
		'assets/images/bg_1.jpg',
		'assets/images/bg_4.jpg',
		'assets/images/bg_6.jpg',
		'assets/images/bg_5.jpg'
	], { duration: duration, fade: 750 });

	jQuery('.backstretch').append("<div class='cityinfo'><span>2013 - now  |  <a href='https://en.wikipedia.org/wiki/London' target='_blank'>London</a>, UK</span></div>");

	/* ---------------------------------------------- /*
		 * Navbar
	/* ---------------------------------------------- */

	var navbar = jQuery('.navbar');
	var navHeight = navbar.height();

	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() >= navHeight) {
			navbar.addClass('navbar-color');
		}
		else {
			navbar.removeClass('navbar-color');
		}
	});

	if (jQuery(window).width() <= 767) {
		navbar.addClass('custom-collapse');
	}

	jQuery(window).resize(function () {
		if (jQuery(this).width() <= 767) {
			navbar.addClass('custom-collapse');
		}
		else {
			navbar.removeClass('custom-collapse');
		}
	});

	/* ---------------------------------------------- /*
	 * WOW Animation When You Scroll
	/* ---------------------------------------------- */

	wow = new WOW({
		mobile: false
	});
	wow.init();

	/* ---------------------------------------------- /*
	 * Owl slider
	/* ---------------------------------------------- */

	jQuery("#owl-clients").owlCarousel({
		items: 4,
		slideSpeed: 300,
		paginationSpeed: 400,
		autoPlay: 5000
	});

	jQuery("#owl-references").owlCarousel({
		items: 1,
		slideSpeed: 300,
		paginationSpeed: 400,
		autoPlay: 5000
	});

	/* ---------------------------------------------- /*
	 * Rotate
	/* ---------------------------------------------- */

	jQuery(".rotate").textrotator({
		animation: "dissolve",
		separator: "|",
		speed: 3000
	});

	var map = new google.maps.Map(document.getElementById('contact_map'), {
		center: { lat: 51.50933, lng: 0.0163313 },
		scrollwheel: false,
		draggable: false,
		zoom: 14,
		disableDefaultUI: true
	});

	// jQuery(".view-all-skills").click(function () {
	//     var skillsHtml = "";
	//     $.ajax({
	//         url: 'skills',
	//         type: 'get',
	//         async: false,
	//         success: function (html) {
	//             skillsHtml = html;
	//             swal({ title: "My skills", text: skillsHtml, html: true, animation: "slide-from-top", closeOnConfirm: false, showConfirmButton: false, allowOutsideClick: true });
	//             jQuery(".close-skills").click(function () {
	//                 swal.close();		            });
	//             jQuery(".frontend").click(function () {
	//                 removeActive();
	//                 showFrontEnd();
	//             });
	//             jQuery(".backend").click(function () {
	//                 removeActive();
	//                 showBackEnd();
	//             });
	//             jQuery(".other-skills").click(function () {
	//                 removeActive();
	//                 showOtherSkills();
	//             });
	//         }
	//     });		    
	// });

	function removeActive() {
		jQuery(".skills-all .active").removeClass("active");
		jQuery(".skills-all ul").hide();
	}

	function showFrontEnd() {
		jQuery(".skills-all .frontend").addClass("active");
		jQuery(".skills-all .frontend-list").show();
	}

	function showBackEnd() {
		jQuery(".skills-all .backend").addClass("active");
		jQuery(".skills-all .backend-list").show();
	}

	function showOtherSkills() {
		jQuery(".skills-all .other-skills").addClass("active");
		jQuery(".skills-all .other-skills-list").show();
	}

});

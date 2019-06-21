var lightInterval = null;
var lightTimeouts = [];
var winnersTimeouts = [];
var alreadyHoveringWinner = false;
var offHover = false;
var num = 0;

$(document).ready(function() {
	$(".splash-button").hover(spark, dim);
	$(".winners").hover(winnersOn, winnersOff);
	$(".winner").hover(centerWinners, uncenterWinners);

	$(document).on('click', 'a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});
}
);


function spark() {
	document.getElementById('splash-img').src="assets/landing1.png";
	lightTimeouts.push( setTimeout(function() {
		document.getElementById('splash-img').src="assets/landing2.png";
	}, 500) );
	lightTimeouts.push( setTimeout(function() {
		document.getElementById('splash-img').src="assets/landing3.png";
	}, 1000) );

	lightInterval = setInterval(function() {
		document.getElementById('splash-img').src="assets/landing1.png";
		lightTimeouts.push( setTimeout(function() {
			document.getElementById('splash-img').src="assets/landing2.png";
		}, 500) );
		lightTimeouts.push( setTimeout(function() {
			document.getElementById('splash-img').src="assets/landing3.png";
		}, 1000) );
	}, 1500);
}

function dim() {
	//console.log("leave");
	clearInterval(lightInterval);
	document.getElementById('splash-img').src="assets/landing.png";
	for(var i = 0; i < lightTimeouts.length; i++) {
		clearTimeout(lightTimeouts[i]);
	}
}

function winnersOn() {
	//console.log("winnersOn");
	alreadyHoveringWinner = true;
}

function winnersOff() {
	//console.log("winnersOff");
	for(var i = 0; i < winnersTimeouts.length; i++) {
		clearTimeout(winnersTimeouts[i]);
	}
	alreadyHoveringWinner = false;
}

function centerWinners() {
	//console.log("centerWinners");
	num = $(this).attr("data-winner");
	if(alreadyHoveringWinner ==  true) {
		if(num == 1) {
			$("#winner1").stop(true).animate({width: "44%"}, 200);
			$("#winner2").stop(true).animate({width: "28%"}, 200);
			$("#winner3").stop(true).animate({width: "28%"}, 200);
		}
		else if(num == 2) {
			$("#winner1").stop(true).animate({width: "28%"}, 200);
			$("#winner2").stop(true).animate({width: "44%"}, 200);
			$("#winner3").stop(true).animate({width: "28%"}, 200);
		}
		else if(num == 3) {
			$("#winner1").stop(true).animate({width: "28%"}, 200);
			$("#winner2").stop(true).animate({width: "28%"}, 200);
			$("#winner3").stop(true).animate({width: "44%"}, 200);
		}
	}
	else if(alreadyHoveringWinner == false) {
		winnersTimeouts.push( setTimeout(function() {
			//console.log("GO! After Wait: " + winnersTimeouts.length);
			if(num == 1) {
				$("#winner1").stop(true).animate({width: "44%"}, 200);
				$("#winner2").stop(true).animate({width: "28%"}, 200);
				$("#winner3").stop(true).animate({width: "28%"}, 200);
			}
			else if(num == 2) {
				$("#winner1").stop(true).animate({width: "28%"}, 200);
				$("#winner2").stop(true).animate({width: "44%"}, 200);
				$("#winner3").stop(true).animate({width: "28%"}, 200);
			}
			else if(num == 3) {
				$("#winner1").stop(true).animate({width: "28%"}, 200);
				$("#winner2").stop(true).animate({width: "28%"}, 200);
				$("#winner3").stop(true).animate({width: "44%"}, 200);
			}
		}, 500) );
	}
}

function uncenterWinners() {
	//console.log("uncenterWinners");
	for(var i = 0; i < winnersTimeouts.length; i++) {
		clearTimeout(winnersTimeouts[i]);
	}

	if(alreadyHoveringWinner) {
		$("#winner1").stop(true).animate({width: "33.33%"}, 200);
		$("#winner2").stop(true).animate({width: "33.33%"}, 200);
		$("#winner3").stop(true).animate({width: "33.33%"}, 200);
	}
}

var darkMode = false;
function toggleDarkMode() {
	if(darkMode == false) {
		darkMode = true;
		$("body,html").css("backgroundColor", "black");
		$(".navlink").removeClass("navlink-light").addClass("navlink-dark");
		$(".navlogo").removeClass("navlogo-light").addClass("navlogo-dark");
		$(".text").css("color", "snow");
		document.getElementById('be-logo').src="assets/white.png";
		document.getElementById('winner-img1').src="assets/winners/winner1-dark.png";
		document.getElementById('winner-img2').src="assets/winners/winner2-dark.png";
		document.getElementById('winner-img3').src="assets/winners/winner3-dark.png";
		$(".footer-text").css('color', 'snow');

		//sponsors
		document.getElementById('linode').src="assets/sponsors/linode-dark.png";
		document.getElementById('sketch').src="assets/sponsors/sketch-dark.png";
		document.getElementById('ultrapress').src="assets/sponsors/ultrapress-dark.png";
		document.getElementById('patamar').src="assets/sponsors/patamar-dark.png";
		document.getElementById('eighty-two').src="assets/sponsors/eighty-two-dark.png";
		document.getElementById('ipic').src="assets/sponsors/ipic-dark.png";
		document.getElementById('tylt').src="assets/sponsors/tylt-dark.png";
	}
	else {
		darkMode = false;
		$("body,html").css("backgroundColor", "white");
		$(".navlink").removeClass("navlink-dark").addClass("navlink-light");
		$(".navlogo").removeClass("navlogo-dark").addClass("navlogo-light");
		$(".text").css("color", "black");
		document.getElementById('be-logo').src="assets/black.png";
		document.getElementById('winner-img1').src="assets/winners/winner1.png";
		document.getElementById('winner-img2').src="assets/winners/winner2.png";
		document.getElementById('winner-img3').src="assets/winners/winner3.png";
		$(".footer-text").css('color', 'black');

		//sponsors
		document.getElementById('linode').src="assets/sponsors/linode.png";
		document.getElementById('sketch').src="assets/sponsors/sketch.png";
		document.getElementById('ultrapress').src="assets/sponsors/ultrapress.png";
		document.getElementById('patamar').src="assets/sponsors/patamar.png";
		document.getElementById('eighty-two').src="assets/sponsors/eighty-two.png";
		document.getElementById('ipic').src="assets/sponsors/ipic.png";
		document.getElementById('tylt').src="assets/sponsors/tylt.png";
	}

}
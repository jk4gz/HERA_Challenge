function scrollWho() {
	var topOfDiv = $('#about').offset().top;
	console.log("Top:", topOfDiv);
	$('html, body').animate({scrollTop: topOfDiv-100}, 1000);
	return false;
}

function scrollProj() {
	var topOfDiv = $('#projects').offset().top;
	console.log("Top:", topOfDiv);
	$('html, body').animate({scrollTop: topOfDiv+400}, 1000);
	return false;
}

function scrollTeam() {
	var topOfDiv = $('#team').offset().top;
	console.log("Top:", topOfDiv);
	$('html, body').animate({scrollTop: topOfDiv-30}, 1000);
	return false;
}

function scrollDonate() {
	var topOfDiv = $('#donate').offset().top;
	console.log("Top:", topOfDiv);
	$('html, body').animate({scrollTop: topOfDiv-100}, 1000);
	return false;
}

$('#kidsB').parallax({imageSrc: 'Images/kids2.jpg'});

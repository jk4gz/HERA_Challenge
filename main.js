function scrollWho() {
	var topOfDiv = $('#about').offset().top;
	console.log("Top:", topOfDiv);
	$('html, body').animate({scrollTop: topOfDiv-100}, 1000);
	return false;
}

function scrollProj() {
	var topOfDiv = $('#projects').offset().top;
	console.log("Top:", topOfDiv);
	$('html, body').animate({scrollTop: topOfDiv-50}, 1000);
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

$('#kidsDos').parallax({imageSrc: 'Images/kids2.jpg'});
$('#teamPic').parallax({imageSrc: 'Images/team.jpg'});
$('#donatePic').parallax({imageSrc: 'Images/team2.jpg'});

$(document).ready(function() {
	var volume1 = document.getElementById('rngVolume').value;
	
	var song = document.getElementById("player"); 
	
	$('#rngVolume').on('change', function() {
    $(song).prop("volume", this.value);
});

	$('#btnPlay').click(function () {
		song.play();
	});

	$('#btnPause').click(function () {
		song.pause();
	});
});
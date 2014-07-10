function getRandomBackground(){

	var searchTerms = ["mountain", "sunset", "beach", "space", "landscape", "meadow", "desert", "skyline", "island", "jungle"];
	var randNumToFour = Math.floor(Math.random()*4);
	var randNumToTen = Math.floor(Math.random()*10);
			
	function getImage() {
		$.ajax ({
			type: 'GET',
			crossDomain: true,
			dataType: 'jsonp',
			url: 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&imgtype=photo&restrict=cc_attribute&safe=active&imgsz=xxlarge&q='+searchTerms[randNumToTen]
		}).done(
			function(response) {
				var googleBackground = (response.responseData.results[randNumToFour].url);
				$('body').css('background-image','url('+googleBackground+')');
				$('body').css('background-size','cover');
			});
  		}

  	getImage();
}

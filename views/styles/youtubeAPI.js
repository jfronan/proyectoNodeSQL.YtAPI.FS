(function(){var OAUTH2_CLIENT_ID = '442941380731-0fdfqtjcdhffd6hepm2ipmbp3m6894ds.apps.googleusercontent.com';
//var OAUTH2_SCOPES = ['http://www.googleapis.com/auth/yt-analytics', 'https://www.googleapis.com/auth/youtube',/* 'https://www.googleapis.com./auth/yt_analytics-monetary.readonly',*/];
var OAUTH2_SCOPES = ['https://www.googleapis.com/auth/youtube',]
var channelID;
var subs;




window.onJSClientLoad = function(){
	$('.post-auth').hide();
	$('.videoPlayerDiv').hide();
	gapi.auth.init(function(){
		window.setTimeout(checkAuth, 1);
	});};

function checkAuth(){
	gapi.client.setApiKey('AIzaSyA--agUkn_uzDE2RIb67G9cxep-zTAMMBk');
	gapi.auth.authorize({
		client_id: OAUTH2_CLIENT_ID,
		scope: OAUTH2_SCOPES,
		immediate: true
	}, handleAuthResult);
}

function handleAuthResult(authResult){
	if(authResult && !authResult.error){
		$('.pre-auth').hide();
		$('.post-auth').show();
		loadAPI();
	}
	else{
		$('.pre-auth').show();
		$('.post-auth').hide();
		$('#login-link').click(function(){
			gapi.auth.authorize({
				client_id: OAUTH2_CLIENT_ID,
				scope: OAUTH2_SCOPES,
				immediate: false
			}, handleAuthResult);
		});
	}
}

function loadAPI(){
	gapi.client.load('youtube', 'v3', function(){
		gapi.client.load('youtubeAnalytics', 'v1', function(){
		//	videoSearchBar;
		});
	});
}

$(function() {
	var searchBar = document.getElementById('videoSearcherBar');
	var busquedaQuery = searchBar.busqueda.value

	searchBar.addEventListener('submit', event => {
		event.preventDefault()
		var busquedaQuery = searchBar.busqueda.value

	var request = gapi.client.youtube.search.list({'maxResults': '1',
                 'part': 'snippet',
                 'q': busquedaQuery,
                 'type': 'video'});

	request.execute(function(response){
		if('error' in response){
			console.log(response.error.message);
		} else{
			vidId = response.items[0].id.videoId;
			displayVideo(vidId);

		}
	});
})
}
);

function displayVideo(idURL){
	$('.videoPlayerDiv').show();
	var videoPlayerDivisor = document.getElementById('ytplayer');
	videoPlayerDivisor.src='https://www.youtube.com/embed/'+ idURL;

}


})();




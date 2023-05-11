

var playerInitTimemediaspace9353 = Date.now();
var playermediaspace9353 = jwplayer("mediaspace9353");

var playerConfigmediaspace9353 = {
	"playlist": [{
		"sources": [
			

			{ "type": "hls", "label": "Auto-HLS", "file": "https://pilatesanytime-media.global.ssl.fastly.net/1683708468_84bd630f5278846ad8e6a22ddd163901ab4230f8/2022/08/courtney-miller/7831_marketing/video/h264-,504p,720p,360p,216p.m3u8" },
			{ "type": "mpd", "label": "Auto-MPD", "file": "https://pilatesanytime-media.global.ssl.fastly.net/1683708468_84bd630f5278846ad8e6a22ddd163901ab4230f8/2022/08/courtney-miller/7831_marketing/video/h264-,504p,720p,360p,216p.mpd" }, {}
			
		],
		"image": "//images.pilatesanytime.com/2022/11/08/large_productionHighFiveChallenge-50388.jpg",
		
		"tracks": [
			
			{ "kind": "thumbnails", "file": "https://pilatesanytime-media.global.ssl.fastly.net/1683708468_e436a8d8a2066c85adc7f41b391d242c27f7a743/2022/08/courtney-miller/7831_marketing/thumbs/160x90.vtt" },
			
		{} ]
	}],
	"skin": {
		"url": "https://www.pilatesanytime.com/css/jwplayer8/skins/pilates_jwplayer8_skin.css?v=PIL-3405",
		"name": "tm_skin"
	},
	"playbackRateControls": [0.5, 0.75, 1, 1.25, 1.5, 2.0],
	
	"cast": {
		"appid": "D285D081",
		"logo": "//images.pilatesanytime.com/graphics/pilates/PAlogo_@2x.png",
		"railcolor": "#99cc33"
	},
	
	"width": "100%",
	"aspectratio": "16:9",
	"hlshtml": true,
	"floating": false 
};

playermediaspace9353.setup(playerConfigmediaspace9353);



if (typeof initJWPlayerMux !== 'undefined') {
	initJWPlayerMux(playermediaspace9353, {
		debug: false,
		data: {
			property_key: 'f668d87099c7c76bc3eef5935', // required
			page_type: 'watchpage', // (see docs) 'watchpage', 'iframe', or leave empty
			viewer_user_id: '-1', // ex: '12345'
			experiment_name: '', // ex: 'player_test_A'
			sub_property_id: 'pilates', // ex: 'cus-1'

			// Player Metadata
			player_name: 'jwplayer', // ex: 'My Main Player'
			player_version: jwplayer.version.split("+")[0], // ex: '1.0.0'
			player_init_time: playerInitTimemediaspace9353, // ex: 1451606400000

			// Video Metadata (cleared with 'videochange' event)
			video_id: '9353', // ex: 'abcd123'
			video_title: '9353: ', // ex: 'My Great Video'
			video_series: '', // ex: 'Weekly Great Videos'
			video_producer: '', // ex: 'Bob the Producer'
			video_content_type: '', // 'short', 'movie', 'episode', 'clip', 'trailer', or 'event'
			video_language_code: '', // ex: 'en'
			video_variant_name: '', // ex: 'Spanish Hard Subs'
			video_variant_id: '', // ex: 'abcd1234'
			video_duration: '', // in milliseconds, ex: 120000
			video_stream_type: 'on-demand', // 'live' or 'on-demand'
			video_encoding_variant: '', // ex: 'Variant 1'
			video_cdn: 'fastly' // ex: 'Fastly', 'Cloudfront'
		}
	});
}

var videoIsPlaying = 0;
var asked_resume = 0;


	var requireTermsOK = 1;



playermediaspace9353.on('time', function(evt) { 
	var lastPosition = $("#video_view_pos").val();
	var currentPosition = evt.position;
	videoIsPlaying = 1;
	$("#video_view_pos").val(currentPosition);

	
});


playermediaspace9353.on('pause', function(data) { 
	if (videoIsPlaying == 1) { markWatched("mediaStop"); }
	videoIsPlaying = 0;
	if (document.ga) ga('send', 'event', 'video', 'pause', 'video_id', 9353);
});




playermediaspace9353.on('play', function(data) {
	
	
	if (document.ga) ga('send', 'event', 'video', 'play', 'video_id', 9353);

	
});


playermediaspace9353.on('complete', function() {
	
	if (document.ga) ga('send', 'event', 'video', 'complete', 'video_id', 9353);
	
});




playermediaspace9353.on('error', function(error) {

	if (document.ga) ga('send', 'event', 'video', 'error', 'video_id', 9353);
	

	var payload = {
		vid: "9353",
		cid: "-1",
		i: "-1",
		e: error,
		c: jwplayer('mediaspace9353').getConfig()
	};
	
	if (error.message.indexOf("Error loading media: File could not be played") >= 0) {
		//Update their prefs to exclude 720p bad renditions, Show the help div
		$('#playbackIssuesDIV').show();
		
		var file = jwplayer('mediaspace9353').getConfig().playlist[0].file;
		
		$.ajax({
			async: false,
			timeout: 10,
			url: file,
			type: "GET",
			error: function(xhr, status, innererror) {
				var responseText = xhr.responseText;
				var re = /^Reference\&\#32\;\&\#35\;(.*)$/m;
				var result = responseText.match(re);
				if (result.length > 1) {
					var reference = result[1];
					payload = {
						vid: "9353",
						cid: "-1",
						i: "-1",
						e: error,
						c: jwplayer('mediaspace9353').getConfig(),
						ar: reference
					};
				}
			}
		});
	}
	else if (error.message.indexOf("Cannot load M3U8: Crossdomain access denied" >= 0)) {
		if ($.cookie("crossdomainReload") !== "true") {
			$.cookie("crossdomainReload", "true");
			// Display brief flash message indicating we're reloading expired video page ?
			location.reload();
		}
		else {
			// Display more friendly error message than the JWPlayer M3U8 access denied?
		}
	}
	else {
		//alert(error.message.indexOf("Error loading media: File could not be played"));
	}
	
	$.ajax({
		type: "POST",
		url: "/jwplayer/jwplayer_error.cfm",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(payload),
		success: function(data) {
			//result = $.parseJSON(data);
			//console.log("post result:"+result.error_message);
		}
	});
});


function doPausemediaspace9353() {
	if(playermediaspace9353.getState() == "playing") {
		playermediaspace9353.pause();
	}
}

function doPlayPausemediaspace9353() {
	if(playermediaspace9353.getState() == "playing") {
		playermediaspace9353.pause();
	}
	else {
		playermediaspace9353.play();
	}
}

function doResumemediaspace9353(resume_position) {
	playermediaspace9353.seek(resume_position);
	
}

function getClassURL() {
	new_url = "#";
	
	return new_url;
}


function markWatched(my_action) {		
	var my_position = document.getElementById("video_view_pos").value;
	var instance = new classFunctions();  
	if (my_action == 'mediaPlay' || my_action == 'mediaStop' || my_action == 'mediaComplete' || my_action == 'mediaProgress') {
		var myResult = instance.saveClassView(9353, -1, '-1', my_action, -1, my_position);
	}
	document.getElementById("video_view_pos").value = my_position;
}

function jumpToChapter(timecode) { seek(timecode); } // backward compatibility in case of caching; delete after 30 days, this function has been renamed
function seek(timecode) { playermediaspace9353.seek(timecode); }

function playVideo() { playermediaspace9353.play(); }


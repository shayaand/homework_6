var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = '100%';
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
});

document.querySelector('#volumeSlider').addEventListener("change", function() { 
	console.log(document.querySelector("#volumeSlider").value/100);
	document.querySelector("#volumeSlider").value/100
	document.querySelector('#volume').innerHTML = document.querySelector("#volumeSlider").value + '%';
});


document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		document.getElementById('mute').innerHTML = 'Mute';
		document.querySelector('#volume').innerHTML = document.querySelector("#volumeSlider").value + '%';
		console.log("Unmuted");
	}
	else {
		video.muted = true;
		console.log("Muted");
		document.getElementById('mute').innerHTML = 'Unmute';
		document.querySelector('#volume').innerHTML = 0+"%";
		console.log(document.querySelector("#volumeSlider").value/100);
	}
		
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9; 
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9; 
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration) {
	video.currentTime = video.currentTime + 5;
	video.play();
	console.log(video.currentTime)
	}
	else {
		video.currentTime = 0;
		video.play();
		console.log(video.currentTime)
	}
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").classList.add('oldTime');
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").classList.remove('oldTime');
});
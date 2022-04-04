var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var slowButton = document.querySelector("#slower");
var speedButton = document.querySelector("#faster");
var skipButton = document.querySelector("skip");

var video = document.querySelector("#player1");
var volumeLevel = document.querySelector("#slider").value;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

playButton.addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = `${volumeLevel}%`;
	video.play();
});

pauseButton.addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
})

slowButton.addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log(`New speed is ${video.playbackRate}`);
})

speedButton.addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log(`New speed is ${video.playbackRate}`);
})

skipButton.addEventListener("click", function() {
	video.currentTime += 15;
	console.log(video.currentTime);
})


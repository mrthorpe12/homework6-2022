const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const slowButton = document.querySelector("#slower");
const speedButton = document.querySelector("#faster");
const skipButton = document.querySelector("#skip");
const muteButton = document.querySelector("#mute");
const styledButton = document.querySelector("#vintage");
const originalButton = document.querySelector("#orig");

const slider = document.querySelector("#slider");
const video = document.querySelector("#player1");
const volumeSpan = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

playButton.addEventListener("click", function() {
	console.log("Play Video");
	volumeSpan.innerHTML = `${video.volume * 100}%`;
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
	if (video.currentTime < video.duration) {
		video.currentTime += 15;
	} else {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
})

muteButton.addEventListener("click", function() {
	if (muteButton.innerHTML == 'Mute') {
		video.muted = true;
		muteButton.innerHTML = 'Unmute';
	} else {
		video.muted = false;
		muteButton.innerHTML = 'Mute';
	}
})

slider.addEventListener("click", function() {
	console.log(`Volume at: ${slider.value}`);
	video.volume = slider.value * 0.01;
	volumeSpan.innerHTML = `${video.volume * 100}%`;
})

styledButton.addEventListener("click", function() {
	video.classList.add("oldSchool");
})

originalButton.addEventListener("click", function() {
	video.classList.remove("oldSchool");
})
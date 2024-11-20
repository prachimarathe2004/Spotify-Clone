// console.log("welcome to spotify");

// let songIndex=0;
// let audioElement= new Audio ('song1.mp3');
// let masterPlay=document.getElementById('masterPlay');
// let myprogressBar=document.getElementById('myprogressBar');

// let songs=[
//     {songName: "perfect", filePath:"song/1.mp3",coverPath:"song1.jpg"},
//     {songName: "perfect", filePath:"song/1.mp3",coverPath:"song1.jpg"},
//     {songName: "perfect", filePath:"song/1.mp3",coverPath:"song1.jpg"},
//     {songName: "perfect", filePath:"song/1.mp3",coverPath:"song1.jpg"},
// ]

// //handle play pause click

// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//     }
// })
// //listen to event
// audiodocument.addEventListener('timeupdate',()=>{
//     console.log("timeupdate");
//     //update seekbar
//     progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
//     console.log(progress);
// })
console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Bade acche lagte hain", filePath: "song1.mp3", coverPath: "cover1.jpg" },
    { songName: "Tuzse naraz nahi zindagi", filePath: "song2.mp3", coverPath: "cover2.jpg" },
    { songName: "moh moh ke dhage", filePath: "song3.mp3", coverPath: "cover3.jpg" },
    { songName: "ye tune kya kiya", filePath: "song4.mp3", coverPath: "cover4.jpg" },
];

// Initialize song item elements with data
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// Handle play/pause for master play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

// Update seek bar as the song plays
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// Change song position on progress bar change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Reset all play buttons to 'play' state
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");
    });
};

// Play a specific song from the song list
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element, index) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = index;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

// Next button functionality
document.getElementById("next").addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length; // Loop back to the first song
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});

// Previous button functionality
document.getElementById("previous").addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop back to the last song if at start
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
});



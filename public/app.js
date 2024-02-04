var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('iframe_youtube', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 1,
            'mute': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log('ready')
    logProgress()
}

function logProgress() {
    console.log('progress: ' + player.getCurrentTime())
    setTimeout(logProgress, 1000);
    console.log(player.data)
}

var done = false;
var videoProgress = 0;

function onPlayerStateChange(event) {
    if(event.data === YT.PlayerState.PLAYING && !done){
        console.log('playing video for first time')
        player.seekTo(0, true)
        setVolume(100)
        done = true;
    }

    if(event.data === YT.PlayerState.ENDED){
        console.log('video ended')
    }

    if(event.data === YT.PlayerState.PAUSED){
        console.log('video paused')
    }

    if(event.data === YT.PlayerState.BUFFERING){
        console.log('video buffering')
    }

    if(event.data === YT.PlayerState.CUED){
        console.log('video cued')
    }

    if(event.data === YT.PlayerState.UNSTARTED){
        console.log('video unstarted')
    }

    if(event.data === YT.PlayerState.PLAYING){
        console.log('video playing')
    }
   
}

function setVolume(volume) {
    player.setVolume(volume);
}

function stopVideo() {
    player.stopVideo();
}

function playVideo() {
    console.log('play')
    player.playVideo();
}

//function that show alert every time I press space bar
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 32){
        alert('space bar pressed')
    }
})

// identify an element to observe
var elementToObserve = document.getElementById('volume_value_input');

// create a new instance of 'MutationObserver' named 'observer', 
// passing it a callback function
observer = new MutationObserver(function(mutationsList, observer) {
    const last = mutationsList.slice(-1);
    setVolume(last[0].target.value);
});

// call 'observe' on that MutationObserver instance, 
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {characterData: false, childList: false, attributes: true});
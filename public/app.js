var player;
var currentVolume = 100;

var reactionStartAt = document.getElementById('reaction_start_at').value

function onYouTubeIframeAPIReady() {
    player = new YT.Player('iframe_youtube', {
        height: '340',
        width: '600',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    logProgress()
}

function logProgress() {
    setTimeout(logProgress, 1000);

    //format currentTime to minutes and seconds
    var minutes = Math.floor(player.getCurrentTime() / 60);
    //if seconds is less than 10, add a 0 before the seconds
    var seconds = Math.floor(player.getCurrentTime() % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    var formattedTime = minutes + ':' + seconds;


    //change value of volume_value_input to currentTime
    document.getElementById('reaction_current_time').value = player.getCurrentTime()
    document.getElementById('reaction_current_time_formatted').innerHTML = formattedTime;
}

var done = false;
var videoProgress = 0;

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
        console.log('playing video for first time')
        player.seekTo(0, true)
        setVolume(100)
        done = true;

        //remove class hidden to element with id = reaction_control_buttons
        document.getElementById('reaction_control_buttons').classList.remove('hidden')
    }

    if (event.data === YT.PlayerState.ENDED) {
        console.log('video ended')
    }

    if (event.data === YT.PlayerState.PAUSED) {
        console.log('video paused')

        // remove class hidden to element with id = play_button_reaction
        document.getElementById('play_button_reaction').classList.remove('hidden')

        // add class hidden to element with id = pause_button_reaction
        document.getElementById('pause_button_reaction').classList.add('hidden')
    }

    if (event.data === YT.PlayerState.BUFFERING) {
        console.log('video buffering')
    }

    if (event.data === YT.PlayerState.CUED) {
        console.log('video cued')
    }

    if (event.data === YT.PlayerState.UNSTARTED) {
        console.log('video unstarted')
    }

    if (event.data === YT.PlayerState.PLAYING) {
        console.log('video playing')

        // remove class hidden to element with id = pause_button_reaction
        document.getElementById('pause_button_reaction').classList.remove('hidden')

        // remove class hidden to element with id = play_button_reaction
        document.getElementById('play_button_reaction').classList.add('hidden')
    }

}

function setVolume(volume) {
    player.setVolume(volume);
}

function pauseVideo() {
    player.pauseVideo();
}

function playVideo() {
    player.playVideo();
}

//add a function that show alert when play_button_reaction is clicked
document.getElementById('play_button_reaction').addEventListener('click', function () {
    playVideo()
})

//add a function that show alert when pause_button_reaction is clicked
document.getElementById('pause_button_reaction').addEventListener('click', function () {
    player.pauseVideo()
})

//function that show alert every time I press space barn
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 32) {
        console.info('space bar pressed')
    }
})

// identify an element to observe
var elementToObserve = document.getElementById('volume_value_input');

// create a new instance of 'MutationObserver' named 'observer', 
// passing it a callback function
observer = new MutationObserver(function (mutationsList, observer) {
    const last = mutationsList.slice(-1);
    setVolume(last[0].target.value);
    currentVolume = last[0].target.value;
});

// call 'observe' on that MutationObserver instance, 
// passing it the element to observe, and the options object
observer.observe(elementToObserve, { characterData: false, childList: false, attributes: true });


// Simulate pressing the spacebar
function simulateSpacebarPress() {
    var spacebarEvent = new KeyboardEvent('keydown', {
        key: ' ',
        code: 'Space',
        keyCode: 32,
        which: 32,
    });

    document.dispatchEvent(spacebarEvent);
}
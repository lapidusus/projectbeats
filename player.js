let player;


const playerContainer = $('.player');

let eventsInit = () => {
    $(".toggle").click(e => {
        e.preventDefault();

        if (playerContainer.hasClass('paused')) {

            playerContainer.removeClass("paused");

            player.pauseVideo();
        } else {
            playerContainer.addClass("paused");

            player.playVideo();
        }
    });

    $(".progress").click(e => {
        const bar  = $(currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;
        
        $(".progress__filled").css({
            left: `${newButtonPositionPercent}%`
        });

        player.seekTo(newPlaybackPositionSec);
    });
};

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);

    const minutes = addZero(Math.floor(roundTime / 60));
    const second = addZero(roundTime - minutes * 60);

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    return `${minutes} : ${second}`;
};

const onPlayerReady = () => {
    let interval;

    const durationSec = player.getDuration();

    $("").text(formatTime(durationSec));

    if (typeof interval != 'undefined') {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $(".progress__filled").css({
            left: `${completedPercent}%`
        });

        $("").text(formatTime(completedSec));
    }, 1000);
};

function onYouTubeIframeAPIReady() {
    player = new YT.Player('yt-player', {
    height: '405',
    width: '660',
    videoId: 'j1xvH5CRHYw',
    events: {
        //'onReady': onPlayerReady,
        //'onStateChange': onPlayerStateChange
        },
            playerVars: {
                controls: 0,
                disablekb: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 0,
                modestbranding: 0,
            }
    });
}

eventsInit();
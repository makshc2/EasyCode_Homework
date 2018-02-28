class VideoPlayer {
    constructor(){
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
    }

    init(){
        this.events();
    }

    events(){
        this.video.addEventListener('click', e => this.togglePlay());
        this.toggle.addEventListener('click', e => this.togglePlay());
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
    }

    togglePlay(){
        const method = this.video.paused ? 'play' : 'pause';
        // this.video.play();
        // this.video.pause();
        this.toggle.textContent = this.video.paused ? '❚ ❚' : '►';
        this.video[method]();
    }

    handleRangeUpdate(e){
        this.video[e.target.name] = e.target.value;
    }

    skip(e){
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }
}

const video = new VideoPlayer();
video.init();

console.log(video);

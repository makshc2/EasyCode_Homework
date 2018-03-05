class VideoPlayer {
    constructor(){
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
        this.video.addEventListener()
    }

    init(){
        this.events();
    }

    events(){
        this.video.addEventListener('click', e => this.togglePlay());
        this.toggle.addEventListener('click', e => this.togglePlay());
        this.progress.addEventListener('click', e => this.clickedBar(e), false);
        this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
    }

    togglePlay(){
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '❚ ❚' : '►';
        this.video[method]();
    }

    handleRangeUpdate(e){
        this.video[e.target.name] = e.target.value;
    }

    clickedBar(e){
        // let mouseX = e.offsetX - this.progress.offsetLeft;
        // let newTime = mouseX * Math.floor(this.video.duration) / 320;
        // console.log('newTime',newTime);
        // this.video.currentTime = newTime;
        // console.log(this.video.currentTime);
        // this.progressBar.style.flexBasis = mouseX + 'px';
    }

    skip(e){
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }
}

const video = new VideoPlayer();
video.init();

console.log(video);

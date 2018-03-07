class VideoPlayer {
    
    constructor(){
        this.player = document.querySelector('.player');
        this.video = this.player.querySelector('.viewer');
        this.progress = document.querySelector('.progress');
        this.progressBar = this.progress.querySelector('.progress__filled');
        this.toggle = this.player.querySelector('.toggle');
        this.skipButtons = this.player.querySelectorAll('[data-skip]');
        this.ranges = this.player.querySelectorAll('.player__slider');
        this.properties = JSON.parse(localStorage.getItem('myVideo')) || {currentTime: 0, playbackRate: 1, volume: 1};
    }

    init(){
        this.events();
        this.getSettings();
    }

    events(){
        this.video.addEventListener('click', e => this.togglePlay(e));
        this.video.addEventListener('timeupdate', e => {this.updateBar(e); this.saveSettings()});
        this.toggle.addEventListener('click', e => this.togglePlay(e));
        this.ranges.forEach(range => range.addEventListener('change', e => {this.handleRangeUpdate(e); this.saveSettings()}));
        this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
        this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
        this.progress.addEventListener('click', e => this.clickedBar(e));
    }

    togglePlay(){
        const method = this.video.paused ? 'play' : 'pause';
        this.toggle.textContent = this.video.paused ? '❚ ❚' : '►';
        this.video[method]();
    }

    handleRangeUpdate(e){
        this.video[e.target.name] = e.target.value;
    }

    updateBar(e){
        const percent = (this.video.currentTime / this.video.duration) * 100;
        this.progressBar.style.flexBasis = `${percent}%`;
    }

    clickedBar(e){
        this.video.currentTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
    }

    skip(e){
        this.video.currentTime += parseFloat(e.target.dataset.skip);
    }

    saveSettings() {
        this.properties.currentTime = this.video.currentTime;
        this.properties.playbackRate = this.video.playbackRate;
        this.properties.volume = this.video.volume;

        let serialProp = JSON.stringify(this.properties);
        localStorage.setItem('myVideo', serialProp);
    }

    getSettings() {
        this.video.currentTime = this.properties.currentTime;
        this.video.playbackRate = this.properties.playbackRate;
        this.video.volume = this.properties.volume;
        this.ranges.forEach(range => range.value = this.properties[range.name]);
    }
    
}

const video = new VideoPlayer();
video.init();

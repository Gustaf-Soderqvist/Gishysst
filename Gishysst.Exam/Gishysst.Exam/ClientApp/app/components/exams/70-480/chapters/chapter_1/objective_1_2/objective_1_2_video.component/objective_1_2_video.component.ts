import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'objective_1_2_video',
    templateUrl: './objective_1_2_video.component.html',
})
export class Objective_1_2_Video_Component implements OnInit {
    video: any;
    ngOnInit() {
        this.getVideo();
    }

    getVideo() {
        this.video = document.getElementById("videoSample_1");
    }

    play() {
        this.video.play();
    }

    pause() {
        this.video.pause();
    }

    back() {
        this.video.currentTime -= 10;
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'objective_1_2',
    templateUrl: './objective_1_2.component.html',
    styleUrls: ['./objective_1_2.component.css']
})
export class Objective_1_2_Component implements OnInit {
    element: any;
    ngOnInit() {
        this.getScript();
    }

    getScript() {
        this.element = document.getElementById("outerDiv");
        if (this.element !== null) {
            alert(this.element.innerHTML);
        }
    }

    showAllParagraphs() {
        var paragraphs = document.getElementsByTagName("p");
        alert("<p> : " + paragraphs.length);
    };

    findAllParagraphs() {
        var p = document.querySelectorAll("p");
        alert("<p> : " + p.length);
    };
}

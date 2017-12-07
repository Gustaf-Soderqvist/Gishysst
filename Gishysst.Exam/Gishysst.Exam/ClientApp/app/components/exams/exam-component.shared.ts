import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Exam_70_480_Component } from './70-480/exam-70-480.component';
import { Chapter_1_Component } from './70-480/chapters/chapter_1/chapter_1.component';
import { Objective_1_2_Video_Component } from './70-480/chapters/chapter_1/objective_1_2/objective_1_2_video.component/objective_1_2_video.component';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        Exam_70_480_Component,
        Chapter_1_Component,
        Objective_1_2_Video_Component
    ]
})
export class ExamModuleShared {
}

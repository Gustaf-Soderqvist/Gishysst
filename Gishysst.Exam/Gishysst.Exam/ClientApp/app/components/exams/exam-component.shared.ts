import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Exam70480Component } from './70-480/exam-70-480.component';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'exam-70-480', component: Exam70480Component },
        ])
    ]
})
export class ExamModuleShared {
}

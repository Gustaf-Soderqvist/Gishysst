import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ExamComponent } from './components/exams/exam-component';
import { Exam_70_480_Component } from './components/exams/70-480/exam-70-480.component';
import { Chapter_1_Component } from './components/exams/70-480/chapters/chapter_1/chapter_1.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        ExamComponent,
        Exam_70_480_Component,
        Chapter_1_Component
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'exam', component: ExamComponent },
            {
                path: 'exam-70-480',
                component: Exam_70_480_Component,
                children: [
                    { path: '', redirectTo: 'exam-70-480', pathMatch: 'full' },
                    { path: 'chapter1', component: Chapter_1_Component },
                ]
            },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}

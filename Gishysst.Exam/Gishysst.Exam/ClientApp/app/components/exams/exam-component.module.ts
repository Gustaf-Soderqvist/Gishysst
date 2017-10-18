import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ExamModuleShared } from './exam-component.shared';
import { ExamComponent } from './exam-component';

@NgModule({
    bootstrap: [ ExamComponent ],
    imports: [
        ExamModuleShared,
        ExamComponent
    ]
})
export class ExamModule {
}

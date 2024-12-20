import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/component/product/product.component';
import { SkillsComponent } from './shared/component/skills/skills.component';
import { StudentsComponent } from './shared/component/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SkillsComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

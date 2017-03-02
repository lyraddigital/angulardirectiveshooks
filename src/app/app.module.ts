import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { LifeCycleHookDirective } from './lifecyclehook.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    LifeCycleHookDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

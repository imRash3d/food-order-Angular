import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpWithInjectorModule } from './modules/http-with-injector/http-with-injector.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpWithInjectorModule.forRoot({endPoint: ''}),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

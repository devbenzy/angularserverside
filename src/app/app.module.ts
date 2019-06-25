import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Optional, Inject } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public uAgent: string;
  constructor(
    @Optional() @Inject('agent') agent: string
  ) {
    this.uAgent = agent;
  }
}

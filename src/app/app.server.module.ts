import { NgModule, Optional, Inject } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppConfig } from '../appconfig ';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(
    @Optional() @Inject('agent') agent: string
  ) {
    //console.log('server module agent', agent);
    AppConfig(agent);
  }
}

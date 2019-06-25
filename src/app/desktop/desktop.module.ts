import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopComponent } from './desktop.component';
import { DesktopRoutingModule } from '../desktop.routing/desktop.routing.module';

@NgModule({
  declarations: [DesktopComponent],
  imports: [
    CommonModule,
    DesktopRoutingModule
  ]
})
export class DesktopModule { }

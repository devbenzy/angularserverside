import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfig } from '../appconfig ';
export function Mobile(userAgent) {

  var isMobile = {
    Android: function () {
      return userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
      return userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return userAgent.match(/IEMobile/i) || userAgent.match(/WPDesktop/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows());
    }
  }
  return isMobile.any();
}



const routes: Routes = [
  {
    path: 'desktop',
    loadChildren: () => {
      let userAgent: string;
      userAgent = AppConfig();
      if (typeof navigator != "undefined") {
        userAgent = navigator.userAgent;
      }
      if (!Mobile(userAgent)) {
        return import('./desktop/desktop.module').then(mod => mod.DesktopModule)
      }
      else {
        return import('./mobile/mobile.module').then(mod => mod.MobileModule)
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

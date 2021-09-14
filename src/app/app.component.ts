import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private statusBar: StatusBar, private platform: Platform ) {
    this.initializeApp();
  }

  initializeApp(){

    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      if(this.platform.is('android')){
        this.statusBar.backgroundColorByHexString('#33000000');
      }

    })

  }

}

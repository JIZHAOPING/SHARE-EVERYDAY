import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = MinePage;

  constructor(public modalCtrl:ModalController) {

  }
  ionViewDidLoad() {
    
    document.querySelector('#tab-t0-1').addEventListener('click',()=>{
      let AboutModal = this.modalCtrl.create(AboutPage);
      AboutModal.present();
    },false);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 892991b49ab1edabb84378ac212585d062afeed2

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HuozanPage } from '../huozan/huozan';
import { PinglunPage } from '../pinglun/pinglun';
import { FansPage } from '../fans/fans';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  huozanClick(){
    this.navCtrl.push(HuozanPage);
  }
  pinglunClick(){
    this.navCtrl.push(PinglunPage);
  }
  fansClick(){
    this.navCtrl.push(FansPage);
  }
  constructor(public navCtrl: NavController) {

  }

}

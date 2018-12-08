import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabiaoPage } from '../fabiao/fabiao';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

fabiao(){
  this.navCtrl.push(FabiaoPage);
}
close(){
  this.navCtrl.pop();
}
  constructor(public navCtrl: NavController) {

  }

}

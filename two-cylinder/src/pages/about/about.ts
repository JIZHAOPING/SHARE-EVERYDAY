import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ FabiaoPage } from'../fabiao/fabiao';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
<<<<<<< HEAD
  fabiao(){
    this.navCtrl.push(FabiaoPage);
  }
=======

 
close(){
  this.navCtrl.pop();
}
>>>>>>> 892991b49ab1edabb84378ac212585d062afeed2
  constructor(public navCtrl: NavController) {

  }
  close(){
    this.navCtrl.pop();
  }
}

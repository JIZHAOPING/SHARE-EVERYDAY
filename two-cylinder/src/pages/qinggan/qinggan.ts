import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the QingganPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qinggan',
  templateUrl: 'qinggan.html',
})
export class QingganPage {
  items = [];
  arr=['亲情','爱情','友情'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  returnHome(){
    this.navCtrl.push(HomePage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QingganPage');
  }

}

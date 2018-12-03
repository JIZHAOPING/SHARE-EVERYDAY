import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the XuexiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xuexi',
  templateUrl: 'xuexi.html',
})
export class XuexiPage {
  items = [];
  arr=['升学','艺能','技能'];
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
    console.log('ionViewDidLoad XuexiPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TongzhiPage } from '../tongzhi/tongzhi';
import { SettingPage } from '../setting/setting';
import { InformationPage } from '../information/information';

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  items = [];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  TongzhiClick(){
    this.navCtrl.push(TongzhiPage);
  }
  SettingClick(){
    this.navCtrl.push(SettingPage);
  }
  gerenxinxiClick(){
    this.navCtrl.push(InformationPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }

}

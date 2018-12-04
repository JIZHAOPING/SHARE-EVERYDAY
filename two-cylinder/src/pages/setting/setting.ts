import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DengluPage } from '../denglu/denglu';
import { AlertController } from 'ionic-angular';
import { GuanyuPage } from '../guanyu/guanyu';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  

  clearClick() {
    let alert = this.alertCtrl.create({
      title: '确认清除缓存？',
      message: '此操作不可撤回',
      buttons: [
        {
          text: '确认',
          role: 'cancel',
          handler: () => {
            console.log('确认');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('取消');
          }
        }
      ]
    });
    alert.present();
  }

  guanyuClick(){
    this.navCtrl.push(GuanyuPage);
  }

  banbenClick(){
    let alert = this.alertCtrl.create({
      title: '版本v-0.0.1',
      subTitle: '2018.11.23',
      buttons: ['确认']
    });
    alert.present();
  }

  dengluClick(){
    this.navCtrl.push(DengluPage);
  }

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}

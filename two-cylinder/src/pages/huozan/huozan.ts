import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HuozanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-huozan',
  templateUrl: 'huozan.html',
})
export class HuozanPage {
  items=[
    {src:'assets/imgs/touxiang.png',name:'小白'},
    {src:'assets/imgs/touxiang-1.png',name:'小黑'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HuozanPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the TongzhiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tongzhi',
  templateUrl: 'tongzhi.html',
})
export class TongzhiPage {
  items: { title: string; }[];
  removeItem(item){
    for(var i = 0; i < this.items.length; i++) {
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {title: '通知1'},
      {title: '通知2'},
      {title: '通知3'},
      {title: '通知4'},
      {title: '通知5'},
      {title: '通知6'}
  ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TongzhiPage');
  }

}

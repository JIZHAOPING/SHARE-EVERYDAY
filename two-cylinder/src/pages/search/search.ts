import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchQuery: string = '';
  items: string[];
  closeClick(){
    this.navCtrl.pop();
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();

    

  }
  initializeItems() {
    this.items = [
      '搞笑',
      '情感',
      '学习',
      '吐槽',
      '搞对象',
      '感受',
      '运动',
      '心灵鸡汤',
    ];
  }
  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}

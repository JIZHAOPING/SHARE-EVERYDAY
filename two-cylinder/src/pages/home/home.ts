import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { XuexiPage } from '../xuexi/xuexi';
import { WorkPage } from '../work/work';
import { QingganPage } from '../qinggan/qinggan';
import { EntertainmentPage } from '../entertainment/entertainment';
import { SearchPage } from '../search/search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  xuexiClick(){
    this.navCtrl.push(XuexiPage);
  }
  workClick(){
    this.navCtrl.push(WorkPage);
  }
  qingganClick(){
    this.navCtrl.push(QingganPage);
  }
  yuleClick(){
    this.navCtrl.push(EntertainmentPage);
  }
  searchClick(){
    this.navCtrl.push(SearchPage);
  }
  constructor(public navCtrl: NavController) {

  }

}

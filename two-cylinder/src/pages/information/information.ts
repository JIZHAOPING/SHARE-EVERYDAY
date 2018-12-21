import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../provider/api';

/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface user{
  uid:number;
  uname:string;
  uimage:string;
  utel:string;
  upwd:string;
}
@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
  list:Array<user>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider) {
  }
  getList(){
    //获取list用于显示
    this.api.getMy().then(data=>{
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list);
    });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
    this.getList();
  }

}

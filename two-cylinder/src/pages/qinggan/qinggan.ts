import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ApiProvider } from '../../provider/api';


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
  qinggan1_li:any[]=[];
  qinggan2_li:any[]=[];
  qinggan3_li:any[]=[];



  getqinggan(){
    this.api.getqinggan1().then(data=>{
      console.dir(data);
      for(let i=0;i<Object.keys(data).length;i++)
      {   
        var date = new Date(data[i].mdate);  
        data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      }
      this.qinggan1_li=<any>data;
    });

    this.api.getqinggan2().then(data=>{
      console.dir(data);
      for(var i=0;i<Object.keys(data).length;i++)
      {   
        var date = new Date(data[i].mdate);  
        data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      }
      this.qinggan2_li=<any>data;
    });

    this.api.getqinggan3().then(data=>{
      console.dir(data);
      for(var i=0;i<Object.keys(data).length;i++)
      {   
        var date = new Date(data[i].mdate);  
        data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      }
      this.qinggan3_li=<any>data;
    });
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QingganPage');
    this.getqinggan();
  }

}

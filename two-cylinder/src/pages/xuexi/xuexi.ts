import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ApiProvider } from '../../provider/api';

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
    console.log(document.getElementById('only'));
  }
  returnHome(){
    this.navCtrl.push(HomePage);
  }

  xuexi1_li:any[]=[];
  xuexi2_li:any[]=[];
  xuexi3_li:any[]=[];
  getxuexi(){
    this.api.getxuexi1().then(data=>{
      console.dir(data);
      for(var i=0;i<Array(data).length;i++)
      {   
        var date = new Date(data[i].mdate);  
        data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      }
      this.xuexi1_li=<any>data;
    });

    this.api.getxuexi2().then(data=>{
      console.dir(data);
      for(var i=0;i<Array(data).length;i++)
      {   
        var date = new Date(data[i].mdate);  
        data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      }
      this.xuexi2_li=<any>data;
    })

    this.api.getxuexi3().then(data=>{
      console.dir(data);
      for(var i=0;i<Array(data).length;i++)
      {   
        var date = new Date(data[i].mdate);  
        data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      }
      this.xuexi3_li=<any>data;
    })

  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XuexiPage');
    this.getxuexi();
  }

}

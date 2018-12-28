import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ApiProvider } from '../../provider/api';


/**
 * Generated class for the EntertainmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage {
  items = [];
  arr=['娱乐','健身','旅行'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  returnHome(){
    this.navCtrl.push(HomePage);
  }

 yule1_li:any[]=[];
 yule2_li:any[]=[];
 yule3_li:any[]=[];

 getyule(){
  this.api.getyule1().then(data=>{
    console.dir(data);
    for(var i=0;i<Array(data).length;i++)
    {   
      var date = new Date(data[i].mdate);  
      data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
    }
    this.yule1_li=<any>data;
  });

  this.api.getyule2().then(data=>{
    console.dir(data);
    for(var i=0;i<Array(data).length;i++)
    {   
      var date = new Date(data[i].mdate);  
      data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
    }
    this.yule2_li=<any>data;
  });

  this.api.getyule3().then(data=>{
    console.dir(data);
    for(var i=0;i<Array(data).length;i++)
    {   
      var date = new Date(data[i].mdate);  
      data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
    }
    this.yule3_li=<any>data;
  });
}
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntertainmentPage');
    this.getyule();
  }

}

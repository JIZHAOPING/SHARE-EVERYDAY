import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ApiProvider } from '../../provider/api';
import { XiangqingPage } from '../xiangqing/xiangqing';



/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {
  items = [];
  arr=['日常','烦恼','经验'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  returnHome(){
    this.navCtrl.push(HomePage);
  }
  xiangqingClick(index){
    this.navCtrl.push(XiangqingPage,{
      id : index
    });
  }

  work1_li:any[]=[];
  work2_li:any[]=[];
  work3_li:any[]=[];

  getwork(){
    this.api.getwork1().then(data=>{
      console.dir(data);
      for(var i=0;i<Object.keys(data).length;i++)
      {   
        var date = new Date(data[i].mdate);  
        data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      }
      this.work1_li=<any>data;
    });

    this.api.getwork2().then(data=>{
      console.dir(data);
      for(var i=0;i<Object.keys(data).length;i++)
      {   
        var date = new Date(data[i].mdate);  
        data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      }
      this.work2_li=<any>data;
    });

      this.api.getwork3().then(data=>{
        console.dir(data);
        for(var i=0;i<Object.keys(data).length;i++)
        {   
          var date = new Date(data[i].mdate);  
          data[i].mdate=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
        }
        this.work3_li=<any>data;
  });
}
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
    this.getwork();
  }

}

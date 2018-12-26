import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { XuexiPage } from '../xuexi/xuexi';
import { WorkPage } from '../work/work';
import { QingganPage } from '../qinggan/qinggan';
import { EntertainmentPage } from '../entertainment/entertainment';
import { SearchPage } from '../search/search';
import { XiangqingPage } from '../xiangqing/xiangqing';
import { ApiProvider } from '../../provider/api';

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
  xiangqingClick(){
    this.navCtrl.push(XiangqingPage);
  }
  guanzhuChange(id){
    if(this.home_li[id].guanzhu==="取消关注"){
      this.home_li[id].guanzhu="+ 关注";
    }else{
      this.home_li[id].guanzhu ="取消关注";
    }
    
  }
  // home_li=[
  //   {src:'assets/imgs/touxiang.png',img:'assets/imgs/头像.png',name:'小白',content:'今天超开心。。',time:'十分钟前',guanzhu:"+关注"},
  //   {src:'assets/imgs/touxiang-1.png',img:'assets/imgs/huaping.jpg',name:'小黑',content:'淡泊宁静。。',time:'十五分钟前',guanzhu:"+关注"}
  // ]
  home_li:any[]=[];
  id:1;
  getList(){
    //获取list用于显示
    this.api.getMovements(this.id).then(data=>{
      console.dir(data);
      this.home_li=<any>data;
      //console.dir(this.list);
    });
  }
  constructor(public navCtrl: NavController ,private api:ApiProvider,) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.getList();
  }
}

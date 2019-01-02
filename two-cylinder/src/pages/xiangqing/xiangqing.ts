import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../provider/api';
import { StorageProvider } from '../../provider/ls';


/**
 * Generated class for the XiangqingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


interface Movement {
  mid: number;
  mcontent:string;
  mdate:string;
  mimg:string;
  mtype:string;
  uid:string;
  uimg:string;
  uname:string;
}

@IonicPage()
@Component({
  selector: 'page-xiangqing',
  templateUrl: 'xiangqing.html',
})


export class XiangqingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider,private storage:StorageProvider) {
    this.id=navParams.get('id');
    this.upid = navParams.get('upid');
    console.log(this.id,this.upid);
    console.log(this.id);
    this.getList();
    this.getcomment();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XiangqingPage');
  }


  id;
  b;
  c;
  d;
  e;
  f;
  value="";
  length = 0;
  upid;
  uid = this.storage.getItem('uid');
  list:Array<Movement>=[];
  commont:any[]=[];
  getList(){
    this.api.getList_next(this.id).then(data=>{
      console.log(this.id);
      console.dir(data);
      this.list=<any>data;
      console.dir(this.list[this.id-1]);
      this.b = this.list[this.id-1].uimg;
      this.c = this.list[this.id-1].uname;
      this.d = this.list[this.id-1].mdate;
      var date = new Date(this.d);  
      this.d=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' +(date.getDate());
      this.e = this.list[this.id-1].mcontent;
      this.f = this.list[this.id-1].mimg;
    });
  }
  postList() {
    let data = JSON.stringify({
      ccontent: this.value,
      mid: this.id,
      uid: this.uid,
    });
    this.api.postPinglun(data).then(data => {
      console.log(data);
      console.log(this);
      // this.getarticlecomment();
    });
  }
  
  getcomment(){
    //获取list用于显示
    this.api.getComment(this.id).then(data=>{
      console.log(this.id);
      console.dir(data);
      this.commont=<any>data;
    });
  }
  comment() {
    this.postList();
    this.value = "";
    this.length = 0;
    this.getcomment();
  }
  
}

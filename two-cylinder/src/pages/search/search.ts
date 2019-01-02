import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../provider/ls';
import { ApiProvider } from '../../provider/api';

/**
 * Generated class for the SearchPage page.
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
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  params = {
    sure_name:'',
    uid:''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:StorageProvider,private api:ApiProvider) {

  }
  id=this.storage.getItem('uid');
  list:Array<user>=[];
  getUser(){
    this.api.getMy(this.id).then(data=>{
      console.log(this.id);
      this.list=<any>data;
      console.log(this.list);
    });
  }
  save(){
    let data=JSON.stringify({
      name:this.params.sure_name,    
      uid:this.storage.getItem('uid') 
    });
    console.log(data);
    this.api.postname(data).then(data=>{
      console.dir(data);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.getUser();
    this.save();
    }


}

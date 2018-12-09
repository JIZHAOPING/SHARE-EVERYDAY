

import { Component} from '@angular/core';
import {IonicPage, NavController,  NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat-message',
  templateUrl: 'chat-message.html',
})
export class ChatMessagePage {

  sendmsg:string;
  send(){
    this.message.push({msg:this.sendmsg})
    this.sendmsg = ''
  }

  message = [
    // {msg:'我爱你！'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }


}


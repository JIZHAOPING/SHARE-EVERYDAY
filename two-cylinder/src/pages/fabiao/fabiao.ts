import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

import { ApiProvider } from '../../provider/api';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
/**
 * Generated class for the FabiaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fabiao',
  templateUrl: 'fabiao.html',
})
export class FabiaoPage {
  text: any;
  
  
  opencamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
     }, (err) => {
      console.log('相机获取失败');
     });
  }
  openfile(){
    const options: ImagePickerOptions = {
      maximumImagesCount: 6,
      width: 100,
      height: 100,
      quality: 100
    };
    
    // 获取图片
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => {
      console.log('获取图片失败');
    });
    
    
  }
  fabiaoClick(){
    let alert = this.alertCtrl.create({
      title: '发表成功！！',
      subTitle: new Date().toLocaleString(),
      buttons: ['确认']
    });
    alert.present();
    this.openModal();
  }
  img_li=[
    {src:'assets/imgs/加号.jpg'},
    
  ]
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider,private camera: Camera,private imagePicker: ImagePicker) {
  }
  getList(){
    let data=JSON.stringify({
      mcontent:this.text,
    });
    this.api.postArticle(data).then(data=>{
      console.dir(data);
    });
  }

  openModal(){
    this.getList();
    this.navCtrl.setRoot(AboutPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FabiaoPage');
    //setInterval("show_time0.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1);  
  }

}
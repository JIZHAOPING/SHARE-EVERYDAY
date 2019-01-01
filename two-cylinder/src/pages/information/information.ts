import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { StorageProvider } from '../../provider/ls';
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
  
  touxiangChange(){
    let alert = this.alertCtrl.create({
      title: '',
      // subTitle: new Date().toLocaleString(),
      buttons: [
        {
          text: '拍照 >',
          handler: () => {
            // console.log('确认');
            this.opencamera();
          }
        },
        {
          text: '从相册选择 >',
          handler: () => {
            // console.log('取消');
            this.openfile();
          }
        },
        {
          text: '取消 >',
          handler: () => {
            console.log('取消');
            
          }
        }
      ]
    });
    alert.present();
  }
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

  items1: any[] = [];

  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private imagePicker: ImagePicker,private storage:StorageProvider,private api:ApiProvider) {
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
    this.getUser();
  }
}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
//引入接口文件
import { ApiProvider} from '../provider/api';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MinePage } from '../pages/mine/mine';
import { XuexiPage } from '../pages/xuexi/xuexi';
import { WorkPage } from '../pages/work/work';
import { QingganPage } from '../pages/qinggan/qinggan';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { TongzhiPage } from '../pages/tongzhi/tongzhi';
import { SettingPage } from '../pages/setting/setting';
import { DengluPage } from '../pages/denglu/denglu';
import { GuanyuPage } from '../pages/guanyu/guanyu';
import { InformationPage } from '../pages/information/information';
import { SearchPage } from '../pages/search/search';
import { HuozanPage } from '../pages/huozan/huozan';
import { PinglunPage } from '../pages/pinglun/pinglun';
import { FansPage } from '../pages/fans/fans';
import { XieyiPage } from '../pages/xieyi/xieyi';
import { ForgetPage } from '../pages/forget/forget';
import { FabiaoPage } from '../pages/fabiao/fabiao';
//import { ChatMessagePage } from '../pages/chat-message/chat-message';
import { PipesModule } from '../pipes/pipes.module';
import { XiangqingPage } from '../pages/xiangqing/xiangqing';
import { Camera} from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MinePage,
    XuexiPage,
    WorkPage,
    QingganPage,
    EntertainmentPage,
    TongzhiPage,
    SettingPage,
    DengluPage,
    GuanyuPage,
    InformationPage,
    SearchPage,
    HuozanPage,
    PinglunPage,
    FansPage,
    XieyiPage,
    ForgetPage,
    FabiaoPage ,  
    //ChatMessagePage
    XiangqingPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MinePage,
    XuexiPage,
    WorkPage,
    QingganPage,
    EntertainmentPage,
    TongzhiPage,
    SettingPage,
    DengluPage,
    GuanyuPage,
    InformationPage,
    SearchPage,
    HuozanPage,
    PinglunPage,
    FansPage,
    XieyiPage,
    ForgetPage,
    FabiaoPage,
    XiangqingPage
    
    //ChatMessagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    ImagePicker
    
  ]
})
export class AppModule {}






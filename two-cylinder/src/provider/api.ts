import { Http,Headers,Response} from '@angular/http';
import { Injectable} from '@angular/core';

@Injectable()

export class ApiProvider{
    //定义post请求需要的头部
    public headers=new Headers({'Content-Type':'application/json'});
    constructor(public http:Http){
        console.log('Hello ApiProvider provider');
    }

    url:string="/api";
    api(){
        return new Promise((resolve,reject)=>{
            this.http.get(this.url+"/user")
                .subscribe(res=>{
                    resolve(res.json());
                },err=>{
                    reject(err);
                })
        })
    }
}
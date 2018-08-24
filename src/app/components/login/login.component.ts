import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient,HttpParams } from "@angular/common/http"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public admin: number =1;
  baseUrl:string="http://192.168.16.126:12345/studentdb";
  constructor(private router: Router,private http:HttpClient) { }

  ngOnInit() {

  }
  dologin() {
    const {username,password,admin,baseUrl} = this;
    console.log(username);
    console.log(password);

    const URL = `${baseUrl}/user/login/${username}/${password}/${admin}`;
    this.http.get(URL).subscribe(res=>{
      console.log(res);
      const code=res.errCode;
      if(username==null||password==null||username=='undefined'||password=='undefined'||admin==null){
        alert("用户名错误");
      }else{
        if(code==0){
          this.router.navigate(['mainframe/main'])
        }else{
          alert(res.errMsg)
          return
        }
      }
      },error => {
      console.log(error);
    })
  }
}

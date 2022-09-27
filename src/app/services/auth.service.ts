import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth: boolean = false;
  public username : string ='';
  public password : string ='';
  public token : string ='';

  constructor() { }
  
  saveSession(username : string, password : string){
    this.username = username;
    this.password = password;
  }

  getToken(u : string, p : string): boolean{

    if(u === 'fer' && p === '1234'){
      this.token = 'hiihjhjhja1231jhja';
      //this.login();
      return true;
    }else{
      console.log('Error. Datos incorrectos')
      return false;
    }

  }
  login() {    
    this.auth = true;    
    localStorage.setItem('auth', JSON.stringify(this.auth));
    
  }

  logout(){
    this.auth = false;
    localStorage.clear();
  }

  showSession(){
    this.auth = localStorage.getItem('auth')?.toLowerCase() =='true';
    return this.auth;
  }
}

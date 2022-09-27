import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public authService: AuthService) { }  
  public loginForm!: FormGroup;
  public messageError: boolean = true;

  ngOnInit(): void {
    this.loginForm =new FormGroup({
      username: new FormControl(),
      password : new FormControl()
    });; 
    
  }

  onSubmit(): void {
    console.log("onSubmit")
    const USERNAME = this.loginForm.get("username")?.value ;
    const PASSWORD = this.loginForm.get("password")?.value;
    this.authService.saveSession(USERNAME, PASSWORD);
  }

  login(): void {
    
    const USERNAME = this.loginForm.get("username")?.value ;
    const PASSWORD = this.loginForm.get("password")?.value;
    this.messageError=this.authService.getToken(USERNAME, PASSWORD);
    this.authService.login();          
  }

  logout(): void {
    this.authService.logout();
  }
  
  showSession(){
    return this.authService.showSession();
  }


}

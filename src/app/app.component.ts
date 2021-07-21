import { AuthService } from './authenticate/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ECommerSolution';
 
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.authService.authenticate("viettungtvhd@gmail.com", "viettungtvhd@123").subscribe(
      (res)=>{localStorage.setItem('token', res.idToken); console.log(res.idToken)}
    )
  }

}

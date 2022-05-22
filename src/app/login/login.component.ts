import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
msgArray:any=[];
email:any;
password:any;
  constructor(private sharedServive:SharedService,
    private router:Router) { }

  ngOnInit(): void {
    this.msgArray = this.sharedServive.receiveMessage();
    
  }
  navToConversion(){
for (let i = 0; i < this.msgArray.length; i++) {
  debugger;
  if(this.email==this.msgArray[i].Email && this.password==this.msgArray[i].Password){
    window.alert("Login Successfull");
   
    this.router.navigate(['/currency']);
    break;
     }
  else{
    window.alert("Not a Registered User, Please Register");
   
  }

  console.log(this.email)
}
  }
}

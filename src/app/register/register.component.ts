import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: any;
  registration :boolean=true;
  pass:any;
  store = [];
;
  fullStore:any=[];
  i:any;
  constructor(private router:Router,
    private sharedservice:SharedService) { }

  ngOnInit(): void {
    this.sharedservice.sendMessage(this.fullStore);
    this.loginForm = new FormGroup({
      'FirstName': new FormControl("", [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z \-\']+')]),
      'LastName': new FormControl("", [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z \-\']+')]),
      'Email': new FormControl("", [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      'Password': new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
      'ConfirmPassword': new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]),
      'PhoneNo': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[6-9]\\d{9}')]),
      'Address': new FormControl("",[Validators.required])

    })
  }
  get FirstName() {
    return this.loginForm.get('FirstName')

  }
  get LastName() {
    return this.loginForm.get('LastName')
  }
  get Email() {
    return this.loginForm.get('Email')
  }
  get Password() {
    return this.loginForm.get('Password')
  }
  get ConfirmPassword() {
    return this.loginForm.get('ConfirmPassword')
  }
  get PhoneNo() {
    return this.loginForm.get('PhoneNo')
  }
  get Address() {
    return this.loginForm.get('Address')
  }
  Submit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.store=this.loginForm.value;
    this.fullStore.push(this.store);
    console.log(this.fullStore)
    if (this.loginForm.get('Password').value == this.loginForm.get('ConfirmPassword').value) {
      this.pass = false;
    }
    else {
      console.log('fail');
      this.pass = true;
    }
   
    localStorage.setItem('First Name',this.loginForm.get('FirstName').value );
    localStorage.setItem('Last Name',this.loginForm.get('LastName').value );
    localStorage.setItem('Email',this.loginForm.get('Email').value );
    localStorage.setItem('Phone No',this.loginForm.get('Password').value );
    localStorage.setItem('Password',this.loginForm.get('ConfirmPassword').value );
    localStorage.setItem('Confirm Password',this.loginForm.get('PhoneNo').value );
    localStorage.setItem('Address',this.loginForm.get('Address').value );
      
     }
  cancel(){
    this.loginForm.get('FirstName').reset();
    this.loginForm.get('LastName').reset();
    this.loginForm.get('Email').reset();
    this.loginForm.get('Password').reset();
    this.loginForm.get('ConfirmPassword').reset();
    this.loginForm.get('PhoneNo').reset();
    this.loginForm.get('Address').reset();
 
    
  }
  login(){
    this.router.navigate(['/login']);
    this.registration=false;
   
  }
}

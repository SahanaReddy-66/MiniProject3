import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencyForm: any;
  amount: any;
  selected: any;
  finalValue: any;
 recMsg:any;
  selectedreceive:any;

  constructor(private sharedService: SharedService,
    private router: Router) {
  
     }

  ngOnInit() {
  
    // console.log(this.sharedService.receiveOption());
   // this.selectedreceive = this.sharedService.receiveOption();
    // console.log(this.selectedreceive);

    this.currencyForm = new FormGroup({
      'value': new FormControl("", [Validators.required, Validators.pattern('[0-9]+')])
    })

  }
  receiveMessage(event:any){
this.recMsg=event;
console.log(this.recMsg)
  }
  get value(){
    return this.currencyForm.get('value')
  }
  conversion() {
  
    if (this.recMsg == "USD") {
      this.finalValue = (this.sharedService.usdConversion(this.amount)) + " US Dollars";

    }
    else if (this.recMsg == "EUR") {
      this.finalValue = (this.sharedService.eurConversion(this.amount)) + " Euro";
    }
    else if (this.recMsg == "AUD") {
      this.finalValue = (this.sharedService.audConversion(this.amount)) + " Australian Dollar";

    }
    else if (this.recMsg == "RUB") {
      this.finalValue = (this.sharedService.rubConversion(this.amount)) + " Russian Ruble";
    }
    else if (this.recMsg == "PHP") {
      this.finalValue = (this.sharedService.phpConversion(this.amount)) + " Philippine peso";
    }

  }
  about() {
    this.router.navigate(['/currency/about']);
  }
  info() {
    this.router.navigate(['/currency/info']);
  }
  clients() {
this.router.navigate(['/currency/clients']);
  }
  contact() {
    this.router.navigate(['/currency/contact']);
  }
}

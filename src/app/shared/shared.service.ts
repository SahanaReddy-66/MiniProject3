import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  displayMessage:any;
  r_Message:any;
  constructor() {
    
   }
   sendMessage(s_message:any){
    ((s_message !=null && s_message !==undefined))? this.displayMessage = s_message: null;
       return this.receiveMessage()
      //  console.log(this.displayMessage)
   
     }
  receiveMessage() {
    return this.r_Message  = this.displayMessage
  }
  usdConversion(a:any){
    return a*0.013;
  }
  eurConversion(a:any){
    return a*0.012;
  }
 audConversion(a:any){
    return a*0.018;
  }
  rubConversion(a:any){
    return a*0.80;
  }
  phpConversion(a:any){
    return a*0.67;
  }
}

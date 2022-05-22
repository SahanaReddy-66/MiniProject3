import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  msgArray:any=[];
  // sharedServive: any;
  constructor( private sharedservice:SharedService) { }

  ngOnInit(): void {
    this.msgArray = this.sharedservice.receiveMessage();
    // console.log(this.msgArray);
    // console.log(this.sharedservice.receiveMessage());
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected: any;
  selectedvalue: any;
  @Output() messageEvent = new EventEmitter();

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    //  this.sharedService.sendOption("Helooo");
  }
  selecting() {
    if (this.selected == "USD") {
      this.selected = this.selected;

    }
    else if (this.selected == "EUR") {
      this.selected = this.selected;
    }
    else if (this.selected == "AUD") {
      this.selected = this.selected;
    }
    else if (this.selected == "RUB") {
      this.selected = this.selected;
    }
    else if (this.selected == "PHP") {
      this.selected = this.selected;
    }
  }
  sendMessage() {
    this.messageEvent.emit(this.selected)
  }
}

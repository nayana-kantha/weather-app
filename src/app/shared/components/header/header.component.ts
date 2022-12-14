import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() location: EventEmitter<string> = new EventEmitter();
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

  getLocation(location:any){
    this.location.emit(location);
  }

}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    
  }

  @Output() onClick = new EventEmitter<any>();


  
}

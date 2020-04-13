import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descrittion',
  templateUrl: './descrittion.component.html',
  styleUrls: ['./descrittion.component.scss'],
})
export class DescrittionComponent implements OnInit {
  @Input() title: any;
  @Input() image: any;
  @Input() text: any;
  @Input() text2: any;
  @Input() textFont: any;
  @Input() number: string;
  constructor() { }
  ngOnInit() {}


  
 

}

import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.scss'],
})
export class HeaderViewComponent implements OnInit {
  @Input() title: any;
  @Input() position: number;
  constructor(private navController: NavController) { }

  ngOnInit() {}

  back(){
    this.navController.back()
  }
}

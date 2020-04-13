import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataUpdatePage } from './data-update.page';

describe('DataUpdatePage', () => {
  let component: DataUpdatePage;
  let fixture: ComponentFixture<DataUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

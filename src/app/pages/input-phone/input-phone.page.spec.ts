import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputPhonePage } from './input-phone.page';

describe('InputPhonePage', () => {
  let component: InputPhonePage;
  let fixture: ComponentFixture<InputPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

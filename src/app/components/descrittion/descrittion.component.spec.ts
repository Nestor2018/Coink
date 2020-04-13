import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescrittionComponent } from './descrittion.component';

describe('DescrittionComponent', () => {
  let component: DescrittionComponent;
  let fixture: ComponentFixture<DescrittionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescrittionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescrittionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

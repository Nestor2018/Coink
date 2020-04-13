import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountDataPage } from './account-data.page';

describe('AccountDataPage', () => {
  let component: AccountDataPage;
  let fixture: ComponentFixture<AccountDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

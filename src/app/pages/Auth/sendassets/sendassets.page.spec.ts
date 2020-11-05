import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendassetsPage } from './sendassets.page';

describe('SendassetsPage', () => {
  let component: SendassetsPage;
  let fixture: ComponentFixture<SendassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendassetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

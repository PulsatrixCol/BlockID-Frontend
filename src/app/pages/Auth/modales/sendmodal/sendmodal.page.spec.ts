import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendmodalPage } from './sendmodal.page';

describe('SendmodalPage', () => {
  let component: SendmodalPage;
  let fixture: ComponentFixture<SendmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

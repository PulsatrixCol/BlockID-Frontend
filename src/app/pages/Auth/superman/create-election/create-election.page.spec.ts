import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateElectionPage } from './create-election.page';

describe('CreateElectionPage', () => {
  let component: CreateElectionPage;
  let fixture: ComponentFixture<CreateElectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateElectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateElectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

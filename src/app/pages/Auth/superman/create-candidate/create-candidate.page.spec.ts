import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCandidatePage } from './create-candidate.page';

describe('CreateCandidatePage', () => {
  let component: CreateCandidatePage;
  let fixture: ComponentFixture<CreateCandidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCandidatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCandidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

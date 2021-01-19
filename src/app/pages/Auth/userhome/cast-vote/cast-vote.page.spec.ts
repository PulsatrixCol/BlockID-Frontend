import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CastVotePage } from './cast-vote.page';

describe('CastVotePage', () => {
  let component: CastVotePage;
  let fixture: ComponentFixture<CastVotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastVotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CastVotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

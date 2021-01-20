import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoteCertificatePage } from './vote-certificate.page';

describe('VoteCertificatePage', () => {
  let component: VoteCertificatePage;
  let fixture: ComponentFixture<VoteCertificatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteCertificatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoteCertificatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceLinksComponent } from './conference-links.component';

describe('ConferenceLinksComponent', () => {
  let component: ConferenceLinksComponent;
  let fixture: ComponentFixture<ConferenceLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

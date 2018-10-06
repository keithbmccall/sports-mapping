import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLinksComponent } from './team-links.component';

describe('TeamLinksComponent', () => {
  let component: TeamLinksComponent;
  let fixture: ComponentFixture<TeamLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

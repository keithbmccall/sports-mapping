import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsLinksComponent } from './teams-links.component';

describe('TeamsLinksComponent', () => {
  let component: TeamsLinksComponent;
  let fixture: ComponentFixture<TeamsLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionLinksComponent } from './division-links.component';

describe('DivisionLinksComponent', () => {
  let component: DivisionLinksComponent;
  let fixture: ComponentFixture<DivisionLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

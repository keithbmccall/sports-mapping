import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSideComponent } from './panel-side.component';

describe('PanelSideComponent', () => {
  let component: PanelSideComponent;
  let fixture: ComponentFixture<PanelSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

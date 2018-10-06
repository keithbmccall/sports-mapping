import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCenterComponent } from './panel-center.component';

describe('PanelCenterComponent', () => {
  let component: PanelCenterComponent;
  let fixture: ComponentFixture<PanelCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

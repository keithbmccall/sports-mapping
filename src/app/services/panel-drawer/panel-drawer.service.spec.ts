import { TestBed, inject } from '@angular/core/testing';

import { PanelDrawerService } from './panel-drawer.service';

describe('PanelDrawerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelDrawerService]
    });
  });

  it('should be created', inject([PanelDrawerService], (service: PanelDrawerService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { CupomService } from './checkout/meu-pedido/cupom.service';

describe('CupomService', () => {
  let service: CupomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CupomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

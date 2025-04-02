import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoPriceCardComponent } from './crypto-price-card.component';

describe('CryptoPriceCardComponent', () => {
  let component: CryptoPriceCardComponent;
  let fixture: ComponentFixture<CryptoPriceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoPriceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoPriceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptosCardComponent } from './cryptos-card.component';

describe('CryptosCardComponent', () => {
  let component: CryptosCardComponent;
  let fixture: ComponentFixture<CryptosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptosCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

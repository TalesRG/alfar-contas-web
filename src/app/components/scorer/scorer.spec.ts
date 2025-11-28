import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scorer } from './scorer';

describe('Scorer', () => {
  let component: Scorer;
  let fixture: ComponentFixture<Scorer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Scorer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scorer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

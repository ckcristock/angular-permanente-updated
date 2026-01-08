import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngifmodal } from './ngifmodal';

describe('Ngifmodal', () => {
  let component: Ngifmodal;
  let fixture: ComponentFixture<Ngifmodal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngifmodal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngifmodal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

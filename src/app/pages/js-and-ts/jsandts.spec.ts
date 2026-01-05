import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsandts } from './jsandts';

describe('Jsandts', () => {
  let component: Jsandts;
  let fixture: ComponentFixture<Jsandts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jsandts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jsandts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

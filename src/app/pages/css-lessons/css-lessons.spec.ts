import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Css } from './css-lessons';

describe('Css', () => {
  let component: Css;
  let fixture: ComponentFixture<Css>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Css],
    }).compileComponents();

    fixture = TestBed.createComponent(Css);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

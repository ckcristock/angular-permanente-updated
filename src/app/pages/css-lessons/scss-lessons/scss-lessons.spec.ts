import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssLessons } from './scss-lessons';

describe('ScssLessons', () => {
  let component: ScssLessons;
  let fixture: ComponentFixture<ScssLessons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssLessons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssLessons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

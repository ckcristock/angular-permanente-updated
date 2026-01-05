import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCss } from './grid-css';

describe('GridCss', () => {
  let component: GridCss;
  let fixture: ComponentFixture<GridCss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridCss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridCss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

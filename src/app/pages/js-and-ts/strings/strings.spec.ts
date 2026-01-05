import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strings } from './strings';

describe('Strings', () => {
  let component: Strings;
  let fixture: ComponentFixture<Strings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Strings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Strings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

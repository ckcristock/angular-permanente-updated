import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacesOne } from './interfaces-one';

describe('InterfacesOne', () => {
  let component: InterfacesOne;
  let fixture: ComponentFixture<InterfacesOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfacesOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfacesOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

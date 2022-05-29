import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlandasComponent } from './blandas.component';

describe('BlandasComponent', () => {
  let component: BlandasComponent;
  let fixture: ComponentFixture<BlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlandasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

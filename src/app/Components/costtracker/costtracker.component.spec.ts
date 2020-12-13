import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosttrackerComponent } from './costtracker.component';

describe('CosttrackerComponent', () => {
  let component: CosttrackerComponent;
  let fixture: ComponentFixture<CosttrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosttrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosttrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresDetailComponent } from './colores-detail.component';

describe('ColoresDetailComponent', () => {
  let component: ColoresDetailComponent;
  let fixture: ComponentFixture<ColoresDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColoresDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

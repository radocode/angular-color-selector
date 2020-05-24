import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresSelectedComponent } from './colores-selected.component';

describe('ColoresSelectedComponent', () => {
  let component: ColoresSelectedComponent;
  let fixture: ComponentFixture<ColoresSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColoresSelectedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

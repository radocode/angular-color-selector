import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoresGridComponent } from './colores-grid.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ColoresGridComponent', () => {
  let component: ColoresGridComponent;
  let fixture: ComponentFixture<ColoresGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ColoresGridComponent],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoresGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

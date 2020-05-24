import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { ColorsService } from './colors.service';
import { ColoresGridComponent } from '../colores-grid/colores-grid.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  colors: any | null;

  constructor(public colorsService: ColorsService) {}

  ngOnInit() {
    this.colorsService.isLoading = true;
    this.colorsService
      .getColors({ page: 1 })
      .pipe(
        finalize(() => {
          this.colorsService.isLoading = false;
        })
      )
      .subscribe((res) => {
        console.log('colors response init:', res);
        this.colors = res;
      });
  }
}

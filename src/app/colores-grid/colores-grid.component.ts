import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ColorsService } from '@app/home/colors.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-colores-grid',
  templateUrl: './colores-grid.component.html',
  styleUrls: ['./colores-grid.component.scss'],
})
export class ColoresGridComponent implements OnInit, OnChanges {
  @Input() colors: any;

  constructor(public colorsService: ColorsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.colors.currentValue) {
      console.log('onchange colors:', changes.colors.currentValue);
      console.log('onchange colorsList:', this.colors);
    }
  }

  ngOnInit(): void {}

  onPageChange(event: PageEvent) {
    this.colorsService.isLoading = true;
    // llamar a MS
    this.colorsService
      .getColors({ page: event.pageIndex + 1 })
      .pipe(
        finalize(() => {
          this.colorsService.isLoading = false;
        })
      )
      .subscribe((res) => {
        console.log('colors response page:', res);
        this.colors = res;
      });
  }
}

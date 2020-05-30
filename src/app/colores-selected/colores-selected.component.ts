import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ColoresDetailComponent } from '@app/colores-detail/colores-detail.component';

@Component({
  selector: 'app-colores-selected',
  templateUrl: './colores-selected.component.html',
  styleUrls: ['./colores-selected.component.scss'],
})
export class ColoresSelectedComponent implements OnInit {
  @Input() color: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log('incoming color selected: ', this.color);
  }

  openDialog(color: any) {
    this.dialog.open(ColoresDetailComponent, {
      width: '400px',
      data: { color },
    });
  }
}

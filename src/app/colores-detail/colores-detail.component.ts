import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColoresSelectedComponent } from '@app/colores-selected/colores-selected.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-colores-detail',
  templateUrl: './colores-detail.component.html',
  styleUrls: ['./colores-detail.component.scss'],
})
export class ColoresDetailComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ColoresSelectedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('color obj: ', this.data);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  copyToClipboard(c: any) {
    console.log(c);

    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = c;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.openSnackBar('Copiado al portapapeles!', '');
  }
}

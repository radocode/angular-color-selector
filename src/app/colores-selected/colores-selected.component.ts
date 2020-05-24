import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-colores-selected',
  templateUrl: './colores-selected.component.html',
  styleUrls: ['./colores-selected.component.scss']
})
export class ColoresSelectedComponent implements OnInit {

  @Input() color: any;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
    this.openSnackBar('!Copiado!','');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

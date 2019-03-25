import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  tglterima: string;
  tglkeluar: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',tglterima:'tes',tglkeluar:'tes'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',tglterima:'tes',tglkeluar:'tes'},
  
];


@Component({
  selector: 'app-suratmasuk',
  templateUrl: './suratmasuk.component.html',
  styleUrls: ['./suratmasuk.component.scss']
})
export class SuratmasukComponent implements OnInit {
  date = new FormControl(new Date());
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','tglterima','tglkeluar'];
  dataSource = ELEMENT_DATA;
  
  animal: string;
  name: string;

  
  constructor(public dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

  ngOnInit() {
  }

}

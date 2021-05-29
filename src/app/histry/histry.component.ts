import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Timestamp } from 'rxjs';

export interface PeriodicElement {


  nic:string;
  phno:string;
  latitude: string;
  logitude: string;
  date:string;
}

@Component({
  selector: 'app-histry',
  templateUrl: './histry.component.html',
  styleUrls: ['./histry.component.css']
})
export class HistryComponent implements OnInit {
  
  displayedColumns: string[] = ['nic','phno','latitude', 'logitude','date',];
  userdata:any;
  modal:any;
  data:any|PeriodicElement;
  ele_data:any| PeriodicElement=[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userdata.filter = filterValue.trim().toLowerCase();
  }
  

  constructor( private afs: AngularFirestore,) { }

  ngOnInit(): void {
    this.afs.collection("users").get().subscribe((data:any) => {
      console.log("asd")
      let users = data.docs.map((data:any, index:any) => ({ nic: data.data()["nic"],phno: data.data()["phno"], latitude: data.data()["latitude"],logitude: data.data()["logitude"],date: data.data()["date"],}));
      this.userdata = new MatTableDataSource(users);  
    }
    ); 

  }

}

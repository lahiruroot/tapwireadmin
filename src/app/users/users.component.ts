import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
export interface PeriodicElement {

  name: string;
  nic: string;
  phno: string;
  pdiv: string;
  prv: string;

}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'nic', 'phno', 'pdiv','prv'];
  userdata:any;
  modal:any;
  data:any|PeriodicElement;
  ele_data:any| PeriodicElement=[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userdata.filter = filterValue.trim().toLowerCase();
  }
  

  constructor(
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.afs.collection("users").get().subscribe((data:any) => {
      console.log("asd")
      let users = data.docs.map((data:any, index:any) => ({ name: data.data()["name"], nic: data.data()["nic"], phno: data.data()["phno"], pdiv: data.data()["pdiv"],prv: data.data()["prv"]}));
      this.userdata = new MatTableDataSource(users);  
    }
    ); 

  }

}

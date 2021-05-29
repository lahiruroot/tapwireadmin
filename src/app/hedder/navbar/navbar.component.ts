import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {MatDialog} from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataLayerManager } from '@agm/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  form:any
  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth,
    public route : Router,
    private fb:FormBuilder
  ) { }



  ngOnInit(): void {
    this.form = this.fb.group({
      logid:['',Validators.required]
    })
  }

  dashboard(){
    this.route.navigate(['/dashboard'])
  }
  login() {
    if(this.form.valid){
      this.afs.collection("admins").get().subscribe((data:any) => {
        console.log("asd");
        let admins = data.docs.filter((data:any, index:any) => (data.data()['logid']==`${this.form.value.logid}`));
        if(admins) {
          this.dashboard();
        }
      });
    }
  }

}

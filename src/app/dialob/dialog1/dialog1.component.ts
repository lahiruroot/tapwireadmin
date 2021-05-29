import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";

export interface PeriodicElement {

}

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component implements OnInit {

  messageform = this.fb.group({
    admin : ['', Validators.required],
    topic : ['', Validators.required],
    date : ['', Validators.required],
    msg : ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore, 
    private agfire: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }
  async message() {  
    this.agfire.collection(`message`).add({
      admin: this.messageform.value.admin,
      topic: this.messageform.value.topic,
      date: this.messageform.value.date,
      msg: this.messageform.value.msg,
      })
    }
}

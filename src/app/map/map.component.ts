import { Component, OnInit } from '@angular/core';
import { AngularFirestore, SnapshotOptions } from '@angular/fire/firestore';
import { AgmMap, MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = '';
  lat = 51.678418;
  lng = 7.809007;
  model: any = [];
  constructor(private afs: AngularFirestore,) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(latlon => {
      this.lat = latlon.coords.latitude;
      this.lng = latlon.coords.longitude;
    }, function () {
      alert('User not allowed')
    }, { timeout: 10000 });
    
    this.afs.collection("users").get().subscribe(data => {
      data.docs.forEach((user) => {
        this.model.push(user.data());
      })
    })

  }

}

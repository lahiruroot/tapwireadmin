import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './hedder/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyComponent } from './main/body/body.component';
import { LoginComponent } from './log/login/login.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import {MatTableModule} from '@angular/material/table';
import { UsersComponent } from './users/users.component';
import { CookieService } from 'ngx-cookie-service';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HistryComponent } from './histry/histry.component';
import { Dialog1Component } from './dialob/dialog1/dialog1.component';
import { Dialog2Component } from './dialob/dialog2/dialog2.component';
import { Dialog3Component } from './dialob/dialog3/dialog3.component';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    MapComponent,
    UsersComponent,
    HistryComponent,
    Dialog1Component,
    Dialog2Component,
    Dialog3Component
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTabsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    
    AgmCoreModule.forRoot({
    }),
 
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

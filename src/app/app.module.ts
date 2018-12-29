import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
//import { MatProgressBarModule, MatButtonModule } from '@angular/material';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { AngularFireDatabaseModule, AngularFireList } from 'angularfire2/database';
import { environment } from '../environments/environment';
 
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
//import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { ServerComponent } from './server/server.component';
//import { Http, ResponseContentType } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
   // AngularFireAuth,
    AngularFireAuthModule,
   // MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

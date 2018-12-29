import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(public afAuth: AngularFireAuth){

}
login(){
  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
}
logout()
{
  this.afAuth.auth.signOut();
}
}


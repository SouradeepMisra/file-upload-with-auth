import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//@Injectable()
export class AppComponent {
 // private user: Observable<firebase.User>;
  //private userDetails: firebase.User = null;
constructor(public afAuth: AngularFireAuth){

}
loginwithgoogle(){
  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
}
logoutwithgoogle()
{
  this.afAuth.auth.signOut();
}

loginwithtwitter(){
  console.log("login withtwittewr")
  this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider());

}
logoutwithtwitter()
{
  this.afAuth.auth.signOut();
}

loginwithfacebook(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
}
logoutwithfacebook()
{
  this.afAuth.auth.signOut();
}

loginwithgithub(){
  this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
}
logoutwithgithub()
{
  this.afAuth.auth.signOut();
}

/*
signInWithTwitter() {
  return this.afAuth.auth.signInWithPopup(
    new firebase.auth.TwitterAuthProvider()
  )
}


signInWithFacebook() {
  return this.afAuth.auth.signInWithPopup(
    new firebase.auth.FacebookAuthProvider()
  )
}

signInWithGoogle() {
  return this.afAuth.auth.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  )
}


isLoggedIn() {
if (this.userDetails == null ) {
    return false;
  } else {
    return true;
  }
}


logout() {
  this.afAuth.auth.signOut()
  .then((res) => this.router.navigate(['/']));
}
}*/

}


import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { FileUpload } from './fileupload';
import { storage } from 'firebase/storage';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase,  AngularFireList } from 'angularfire2/database';
//import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { Http, ResponseContentType } from '@angular/http';
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent  {
newcomponent="New Component Created";
private basePath = '/uploads';
title = 'app'
selectedfiles: FileList;
file: File;
imgsrc;
color: string = 'primary';
mode: 'determinate';
progressbarValue;
currentFileUpload: FileUpload;
progress: { percentage: number } = { percentage: 0};

  constructor( private storage: AngularFireStorage, private db: AngularFireDatabase,) { 

  }
selectFile(event){
  this.selectedfiles = event.target.files;

}
upload(){
  const file= this.selectedfiles.item(0);
  this.selectedfiles = undefined;
  this.currentFileUpload = new FileUpload(file);
  this.pushFileToStorage(this.currentFileUpload, this.progress);
}
pushFileToStorage(fileUpload: FileUpload, progress:{ percentage: number }){
const storageRef = firebase.storage().ref();
const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  (snapshot) => {
    // in progress
    const snap = snapshot as firebase.storage.UploadTaskSnapshot;
    progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
  },
  (error) => {
    // fail
    console.log(error);
  },
  () => {
    // success
    uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
      console.log('File available at', downloadURL);
      fileUpload.url = downloadURL;
      fileUpload.name = fileUpload.file.name;
      this.saveFileData(fileUpload);
    });
  }
);
}

private saveFileData(fileUpload: FileUpload) {
this.db.list(`${this.basePath}/`).push(fileUpload);
}

getFileUploads(numberItems): AngularFireList<FileUpload> {
return this.db.list(this.basePath, ref =>
  ref.limitToLast(numberItems));
}

fileUploads: any[];

//constructor(private uploadService: UploadFileService) { }

ngOnInit() {
// Use snapshotChanges().pipe(map()) to store the key
  this.getFileUploads(6).snapshotChanges().pipe(
  map(changes =>
    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  )
).subscribe(fileUploads => {
 this.fileUploads = fileUploads;
}); 
}



}




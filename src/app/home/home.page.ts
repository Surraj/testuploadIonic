import { Component, ViewChild } from '@angular/core';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import { HttpClient } from '@angular/common/http'


export class ExampleDto {
	img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;

  constructor(private http:HttpClient) {}

  upload() {

    const files = this.fileField.getFiles();
    console.log(files);
    
    const formData = new FormData();
    // formData.append('somekey', 'some value'); // Add any other data you want to send

    files.forEach((file) => {
      formData.append('files[]', file.rawFile, file.name);
    });
    this.http.post(
      'https://test-imageuploadionic.s3.amazonaws.com/hello.txt?AWSAccessKeyId=AKIAIEIZUW3E7BXEMY5Q&Signature=SID3Z%2Fe2o8iBVy3Mf%2Fpd8VcRUOg%3D&Expires=1563440843',
       formData, {'headers': {'Content-Type': ''}}).subscribe(val=>
    console.log(val))

    // POST formData to Server

  }
}

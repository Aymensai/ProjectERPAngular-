import { Component, OnInit } from '@angular/core';
import { PictureService } from '../../../service/picture.service';
import * as jwt_decode from 'jwt-decode';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent  {

  picture: ImageSnippet;

  constructor(private pictureService : PictureService)
  {}
  access_token = localStorage.getItem('access_token');
  decode = jwt_decode(this.access_token);
id ;
  private onSuccess() {
    this.picture.pending = false;
    this.picture.status = 'ok';
  }

  private onError() {
    this.picture.pending = false;
    this.picture.status = 'fail';
    this.picture.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();


    reader.addEventListener('load', (event: any) => {

      this.picture = new ImageSnippet(event.target.result, file);
      const formData = new FormData();
      formData.append('picture', this.picture.file);
      this.picture.pending = true;
      this.pictureService.uploadPicture(this.decode.data._id, formData).subscribe(
        (res: any) => {
          localStorage.setItem("picture", res.picture)
        
          
          this.onSuccess();
          this.pictureService.reloadPicture();
        },
        (err) => {
          this.onError();
        })
    });
   
    reader.readAsDataURL(file);
  }
}
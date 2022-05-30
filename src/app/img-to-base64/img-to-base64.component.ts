import { Component, OnInit } from '@angular/core';
import { FileValidators } from "ngx-file-drag-drop";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-img-to-base64',
  templateUrl: './img-to-base64.component.html',
  styleUrls: ['./img-to-base64.component.scss']
})
export class ImgToBase64Component implements OnInit {
  title =  'this'
  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  ngOnInit(): void {
  
    this.fileControl.valueChanges.subscribe((files: File[]) =>
      console.log(this.fileControl.value[0])
    );
  }

}

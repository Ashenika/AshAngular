import { Component, OnInit } from '@angular/core';

declare var  $:any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public file_src:string = 'assets/images/profile.png';


  constructor() { }

  ngOnInit() {
  }

  imageUploaded(file: any){
    $('img').hide();
  }
  
  imageRemoved(file: any){
    $('img').show();
  }
  
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {

  constructor() {}

  @Input() postData: any;

 ngOnInit(): void {
   
 }

}

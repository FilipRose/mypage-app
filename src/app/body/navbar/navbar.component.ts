import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  categories: Array<any>;

  constructor(private _categoriesService: CategoriesService) {}

  ngOnInit(): void {
    
    this._categoriesService.loadData().subscribe(val => {
    this.categories = val;
    })
  }

}

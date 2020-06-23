import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  getCategories(): Category[]{
    return CATEGORIES;
  }
  constructor() { }
}

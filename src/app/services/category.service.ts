import { Injectable } from '@angular/core';
import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/categories';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(): AngularFireList<any[]> {
    return this.db.list('/categories');
  }

}

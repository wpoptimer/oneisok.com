import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class CategoryAdmin extends Parse.Object {

  constructor() {
    super('CategoryAdmin');
  }

  static getInstance() {
    return this;
  }

  load(): Promise<CategoryAdmin[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(CategoryAdmin);
      query.equalTo('status', 'Active');
      query.ascending('sort');
      query.doesNotExist('deletedAt');
      query.find().then((data: CategoryAdmin[]) => resolve(data), error => reject(error));
    });
  }

  get title(): string {
    return this.get('title');
  }

  get icon() {
    return this.get('icon');
  }

  get image() {
    return this.get('image');
  }

  get imageThumb() {
    return this.get('imageThumb');
  }

  get placeCount() {
    return this.get('placeCount');
  }

  get slug() {
    return this.get('slug');
  }

  toString(): string {
    return this.title;
  }

}

Parse.Object.registerSubclass('CategoryAdmin', CategoryAdmin);

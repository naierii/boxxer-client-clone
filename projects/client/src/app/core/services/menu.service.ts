import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private hoverMenuData: any;

  constructor() { }

  setHoverMenuData(data: any) {
    this.hoverMenuData = data;
  }

  getHoverMenuData() {
    return this.hoverMenuData;
  }
}

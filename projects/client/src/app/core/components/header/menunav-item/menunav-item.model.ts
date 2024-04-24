export class MenunavItem {
  name: string;
  route: string;
  parent: MenunavItem;
  subItems: MenunavItem[];
  position: number;
  seperator: boolean;
  constructor(model: any = null) {
    if (model) {
      this.name = model.name;
      this.route = model.route;
      this.parent = model.parent;
      this.subItems = this.mapSubItems(model.subItems);
      this.position = model.position;
      this.seperator = model.seperator;
    }
  }

  hasSubItems() {
    if (this.subItems) {
      return this.subItems.length > 0;
    }
    return false;
  }

  hasParent() {
    return !!this.parent;
  }

  mapSubItems(list: MenunavItem[]) {
    if (list) {
      list.forEach((item, index) => {
        list[index] = new MenunavItem(item);
      });

      return list;
    }
  }
}

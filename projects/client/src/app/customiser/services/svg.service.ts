import { Location } from '@angular/common';
import { ElementRef, Injectable } from '@angular/core';
import {
  CustomDesignFlag,
  CustomDesignImage,
  CustomDesignLogo,
  CustomName,
} from '@global/models/custom-design';
import { CustomProductSetting } from '@global/models/custom-product-setting';
import { Material } from '@global/models/material';

@Injectable()
export class SvgService {
  patterns: any[] = [];
  nameFillPatterns: any[] = [];
  nameOutlinePatterns: any[] = [];
  nameFilters: any[] = [];
  template: ElementRef;
  svg: ElementRef;
  dragObject:
    | CustomDesignFlag
    | CustomDesignLogo
    | CustomDesignImage
    | CustomName;
  base: string;
  private imageBaseUrl = `https://img.boxxerworld.com/`;
  private imageTransform = '?width=800';

  constructor(public location: Location) {}

  forEach(array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  }

  hideOptional(setting: CustomProductSetting) {
    if (setting.area_size.optional || setting.muay_thai) {
      let elements = this.template.nativeElement.querySelectorAll(
        `g#${setting.panel} path, g#${setting.panel} circle, g#${setting.panel} ellipse`
      );

      if (!elements.length) {
        elements = this.template.nativeElement.querySelectorAll(
          `g#${setting.panel}`
        );
      }

      this.forEach(
        elements,
        (index, element: SVGElement) => {
          element.setAttribute('visibility', 'hidden');
        },
        this
      );
    }
  }

  setDefault(setting: CustomProductSetting) {
    if (setting.default_material) {
      this.addColor(setting.default_material, setting.panel);
    }
  }

  addColor(
    material: Material,
    panel: string,
    useBase = true,
    optional = false
  ) {
    let clearOptional = false;
    this.base = useBase ? this.location.path() : '';
    const getPattern = this.patterns.find(
      (item) => `${panel}Pattern` === item.id
    );
    if (!material) {
      material = {
        hex: '#ffffff',
      };
      clearOptional = true;
    }
    if (getPattern) {
      getPattern.image = !material.image
        ? null
        : `${this.imageBaseUrl}${material.image.key}${this.imageTransform}`;
      getPattern.hex = !material.hex ? null : material.hex;
      this.patterns.slice(0);
    } else {
      this.patterns.push({
        id: `${panel}Pattern`,
        hex: !material.hex ? null : material.hex,
        image: !material.image
          ? null
          : `${this.imageBaseUrl}${material.image.key}${this.imageTransform}`,
      });
    }
    if (this.template && this.template.nativeElement) {
      let elements = this.template.nativeElement.querySelectorAll(
        `g#${panel} path, g#${panel} circle, g#${panel} ellipse`
      );

      if (!elements.length) {
        elements = this.template.nativeElement.querySelectorAll(`g#${panel}`);
      }

      this.forEach(
        elements,
        (index, element: SVGElement) => {
          element.setAttribute('fill', `url(${this.base}#${panel}Pattern)`);
          if (clearOptional && optional) {
            element.setAttribute('visibility', 'hidden');
          } else if (optional) {
            element.setAttribute('visibility', 'visible');
          }
        },
        this
      );
    }
  }

  addNameFillColour(name: CustomName) {
    const getPattern = this.nameFillPatterns.find(
      (item) => `NameFill${name._id}Pattern` === item.id
    );
    if (!name.fill) {
      name.fill = {
        hex: '#ffffff',
      };
    }

    if (getPattern) {
      getPattern.image = !name.fill.image
        ? null
        : `${this.imageBaseUrl}${name.fill.image.key}${this.imageTransform}`;
      getPattern.hex = !name.fill.hex ? null : name.fill.hex;
      getPattern.crystal = !name.crystal ? null : `Crystal${name._id}Pattern`;
      this.nameFillPatterns.slice(0);
    } else {
      this.nameFillPatterns.push({
        id: `NameFill${name._id}Pattern`,
        hex: !name.fill.hex ? null : name.fill.hex,
        image: !name.fill.image
          ? null
          : `${this.imageBaseUrl}${name.fill.image.key}${this.imageTransform}`,
        crystal: !name.crystal ? null : name.crystal.data_uri,
      });
    }

    const getNameFilter = this.nameFilters.find(
      (item) => `Filter${name._id}` === item.id
    );
    if (getNameFilter) {
      getNameFilter.crystal = !name.crystal ? null : name.crystal.data_uri;
      getNameFilter.text3d = name.finish ? name.finish.text3d : false;
      this.nameFilters.slice(0);
    } else {
      this.nameFilters.push({
        id: `Filter${name._id}`,
        crystal: !name.crystal ? null : name.crystal.data_uri,
        text3d: name.finish ? name.finish.text3d : false,
      });
    }
  }

  addNameOutlineColour(name: CustomName) {
    const getPattern = this.nameOutlinePatterns.find(
      (item) => `NameOutline${name._id}Pattern` === item.id
    );
    if (!name.outline) {
      name.outline = {
        hex: '#ffffff',
      };
    }
    if (getPattern) {
      getPattern.image = !name.outline.image
        ? null
        : `${this.imageBaseUrl}${name.outline.image.key}${this.imageTransform}`;
      getPattern.hex = !name.outline.hex ? null : name.outline.hex;
      this.patterns.slice(0);
    } else {
      this.nameOutlinePatterns.push({
        id: `NameOutline${name._id}Pattern`,
        hex: !name.outline.hex ? null : name.outline.hex,
        image: !name.outline.image
          ? null
          : `${this.imageBaseUrl}${name.outline.image.key}${this.imageTransform}`,
      });
    }
  }
}

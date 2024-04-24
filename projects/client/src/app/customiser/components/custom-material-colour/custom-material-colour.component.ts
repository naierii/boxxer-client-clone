import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TermMaterial } from '@global/models/custom-setting';
import { of, Subject, Observable } from 'rxjs';
import { startWith, switchMap, filter } from 'rxjs/operators';
import { Material } from '@global/models/material';

@Component({
  selector: 'bx-custom-material-colour',
  templateUrl: './custom-material-colour.component.html',
  styleUrls: ['./custom-material-colour.component.scss'],
})
export class CustomMaterialColourComponent implements OnInit {
  @Input() panel: any;
  @Input()
  selectedMaterial: Material;
  materialGroups$: Observable<TermMaterial[]>;
  group_name$ = new Subject<string>();
  @Output()
  materialColourSelected: EventEmitter<Material> = new EventEmitter<Material>();
  selectedGroup: any;
  constructor() {}

  ngOnInit() {
    this.selectedGroup = null;
    if (this.selectedMaterial && this.selectedMaterial.groups) {
      this.selectedGroup = this.selectedMaterial.groups[0];
    }
    this.materialGroups$ = this.group_name$.pipe(
      startWith(this.selectedGroup ? this.selectedGroup.title : null),
      filter((resp) => resp !== null),
      switchMap((group_name) => this.filteredGroups(group_name))
    );
  }

  filteredGroups(group_name): Observable<TermMaterial[]> {
    const material_groups = JSON.parse(
      JSON.stringify(this.panel.material_groups)
    );
    const result = material_groups.map((group) => {
      if (group.materials && group.materials.length) {
        group.materials = group.materials.filter((material) => {
          if (material.groups && material.groups.length) {
            return material.groups.some((material_group) => {
              return material_group.title === group_name;
            });
          } else {
            return false;
          }
        });
      }
      return group;
    });
    return of(result.filter((r) => r.materials && r.materials.length > 0));
  }

  showGroup(group) {
    this.selectedGroup = group;
    this.group_name$.next(group.title);
  }

  colourSelected(material: Material) {
    this.materialColourSelected.emit(material);
  }
}

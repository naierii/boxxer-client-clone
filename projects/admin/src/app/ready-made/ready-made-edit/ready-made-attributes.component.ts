import {
  Component,
  OnInit,
  Inject,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { SocketService } from '@admin/shared/services/socket.service';
import { map, take } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'bx-ready-made-attributes',
  templateUrl: './ready-made-attributes.component.html',
  providers: [
    {
      provide: 'CategoryService',
      useClass: SocketService
    },
    {
      provide: 'TermService',
      useClass: SocketService
    }
  ]
})
export class ReadyMadeAttributesComponent implements OnInit {
  @Input()
  form: FormGroup;
  @Output()
  onAddAttribute = new EventEmitter<any>();
  @Output()
  onRemoveAttribute = new EventEmitter<number>();
  allCategories: any[];
  categories: any[];
  categoryForm: FormGroup;
  bulkaddForm: FormGroup;
  ready = false;
  terms$ = category =>
    this.termService.find({ category }).pipe(
      take(1),
      map((resp: any) => resp.data)
    )
  constructor(
    @Inject('CategoryService') private service: SocketService,
    @Inject('TermService') private termService: SocketService,
    protected fb: FormBuilder
  ) {
    service.setup('category');
    termService.setup('term');
  }

  get formAttributes() {
    return this.form.get('attributes') as FormArray;
  }

  ngOnInit() {
    this.bulkaddForm = this.fb.group({
      title: [this.form.get('title').value],
      sku: [this.form.get('parent_sku').value],
      price: [this.form.get('price').value]
    });

    this.form.get('attributes').value.forEach(attribute => {
      this.bulkaddForm.addControl(attribute.title, new FormControl());
    });
    this.service
      .find({ product_attribute: true })
      .pipe(map((resp: any) => resp.data))
      .subscribe(resp => {
        this.allCategories = resp;
        this.setAttributes();
      });
  }

  setAttributes() {
    const selectedAttributes = this.form
      .get('attributes')
      .value.map(a => a._id);

    this.categories = this.allCategories.filter(
      cat => !selectedAttributes.includes(cat._id)
    );

    this.categoryForm = this.fb.group({
      category: [
        this.categories && this.categories.length
          ? this.categories[0]._id
          : null
      ]
    });
  }

  getControls(frmGrp: FormGroup, key: string) {
    return (frmGrp.controls[key] as FormArray).controls;
  }

  addAttribute() {
    const attribute = this.categories.find(
      c => c._id === this.categoryForm.get('category').value
    );
    this.onAddAttribute.emit(attribute);
    this.setAttributes();
  }

  removeAttribute(i: number) {
    this.onRemoveAttribute.emit(i);
    this.setAttributes();
  }

  addVaritions() {
    const options = [];

    this.form.get('attributes').value.forEach(attribute => {
      const value = this.bulkaddForm.get(attribute.title).value;
      options.push({
        [attribute.title]: value
      });
    });
  }
}

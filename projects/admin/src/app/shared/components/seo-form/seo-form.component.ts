import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bx-seo-form',
  templateUrl: './seo-form.component.html'
})
export class SeoFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() public item: any;
  seoGroup: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.seoGroup = this.fb.group({
      title: [this.item && this.item.seo ? this.item.seo.title : null],
      page_title: [
        this.item && this.item.seo ? this.item.seo.page_title : null
      ],
      canonical: [this.item && this.item.seo ? this.item.seo.canonical : null],
      description: [
        this.item && this.item.seo ? this.item.seo.description : null,
        [Validators.maxLength(360)]
      ]
    });
    this.parentForm.addControl('seo', this.seoGroup);
  }
  get seoData() {
    return this.parentForm.get('seo') as FormGroup;
  }
}

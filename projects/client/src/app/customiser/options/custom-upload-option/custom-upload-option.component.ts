import { Image } from '@global/models/image';
import { CustomiserOptionsService } from '@app/customiser/services/customiser-options.service';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { fadeInAnimation } from '@app/route.animation';
import { DesignService } from '@app/customiser/services/design.service';
import { ActivatedRoute } from '@angular/router';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { CustomDesignImage } from '@global/models/custom-design';
import { untilComponentDestroyed } from '@global/untilDestroy';
import * as fromCustomiser from './../../reducers';
import { Store, select } from '@ngrx/store';
import { CustomSetting } from '@global/models/custom-setting';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GraphicPriceSize } from '@global/models/graphic-price';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'bx-custom-upload-option',
  templateUrl: './custom-upload-option.component.html',
  styleUrls: [
    './custom-upload-option.component.scss',
    './../../scss/options.scss',
  ],
  animations: [fadeInAnimation],
})
export class CustomUploadOptionComponent implements OnInit, OnDestroy {
  uploadForm: FormGroup;
  @HostBinding('@fadeInAnimation')
  get slideIn() {
    return '';
  }

  dropzone_config: DropzoneConfigInterface;
  currentUpload: CustomDesignImage;
  selectedUpload: CustomDesignImage;
  canDelete = false;
  customSettings$: Observable<CustomSetting>;
  uploadSizes$: Observable<GraphicPriceSize[]>;
  hasSizes = false;
  price = 0;
  constructor(
    private optionsService: CustomiserOptionsService,
    private designService: DesignService,
    private route: ActivatedRoute,
    private store: Store<fromCustomiser.State>,
    private fb: FormBuilder
  ) {
    this.customSettings$ = store.pipe(select(fromCustomiser.getCustomSettings));
    this.uploadSizes$ = store.pipe(select(fromCustomiser.getUploadSizes)).pipe(
      tap((resp) => {
        if (resp) {
          this.hasSizes = true;
        }
        this.sizesSetup();
      })
    );
  }

  ngOnInit() {
    this.dropzone_config = {
      params: {
        folder: 'customer-upload',
        design_token: this.designService.token,
      },
      uploadMultiple: false,
      maxFiles: 1,
    };

    this.route.params
      .pipe(
        switchMap((params) =>
          this.store.pipe(
            select(fromCustomiser.getDesignUploadById(params['id']))
          )
        ),
        untilComponentDestroyed(this)
      )
      .subscribe((upload: CustomDesignImage) => {
        if (upload) {
          this.selectedUpload = upload;
          this.currentUpload = this.selectedUpload;
          this.canDelete = true;
          this.price = this.selectedUpload.price;
        }
        this.uploadForm = this.fb.group({
          remove_background: [
            this.selectedUpload && this.selectedUpload.remove_background
              ? true
              : false,
          ],
          instructions: [
            this.selectedUpload && this.selectedUpload.instructions
              ? this.selectedUpload.instructions
              : null,
          ],
          size: [
            this.selectedUpload && this.selectedUpload.size
              ? this.selectedUpload.size
              : null,
            Validators.required,
          ],
        });
      });
  }

  sizesSetup() {
    if (!this.hasSizes) {
      this.uploadForm.get('size').setValidators(null);
      this.uploadForm.get('size').updateValueAndValidity();
      this.customSettings$
        .pipe(
          map((resp) => (this.price = resp.upload_price)),
          untilComponentDestroyed(this)
        )
        .subscribe();
    } else {
      this.uploadForm
        .get('size')
        .valueChanges.pipe(
          switchMap((value) => {
            return this.uploadSizes$.pipe(
              map((sizes) => sizes.find((s) => s.title === value))
            );
          }),
          map((findSize) => {
            return findSize && findSize.price ? findSize.price : 10;
          }),
          untilComponentDestroyed(this)
        )
        .subscribe((resp) => (this.price = resp));
    }
  }

  get validated() {
    return (
      this.selectedUpload &&
      this.selectedUpload.image &&
      this.uploadForm.get('size').valid
    );
  }

  save() {
    if (this.currentUpload) {
      this.designService.updateSub(
        true,
        {
          'uploads.$.image': this.selectedUpload.image,
          'uploads.$.size': this.uploadForm.get('size').value,
          'uploads.$.instructions': this.uploadForm.get('instructions').value,
          'uploads.$.remove_background': this.uploadForm.get(
            'remove_background'
          ).value,
        },
        { 'uploads._id': this.selectedUpload._id }
      );
    } else {
      this.selectedUpload.instructions = this.uploadForm.get(
        'instructions'
      ).value;
      this.selectedUpload.size = this.uploadForm.get('size').value;
      this.selectedUpload.remove_background = this.uploadForm.get(
        'remove_background'
      ).value;
      const data = {
        uploads: this.selectedUpload,
      };
      this.designService.saveOption(true, { $addToSet: data });
    }
  }

  cancel() {
    if (this.currentUpload) {
      this.selectedUpload = this.currentUpload;
    }
    this.backToMenu();
  }

  delete() {
    this.designService.saveOption(true, {
      $pull: { uploads: { _id: this.selectedUpload._id } },
    });
  }

  backToMenu() {
    this.optionsService.backToMenu();
    this.designService.selectedObject = null;
    this.selectedUpload = null;
  }

  onUploadSuccess(resp: any) {
    const file = resp[0];
    const image: Image = resp[1];
    const resize = file.width / 50;

    if (this.selectedUpload) {
      this.selectedUpload.image = image;
      this.selectedUpload.position.width = file.width / resize;
      this.selectedUpload.position.height = file.height / resize;
      this.selectedUpload.position.aspect_ratio = file.width / file.height;
      return;
    }

    this.selectedUpload = {
      price: 0,
      size: null,
      image,
      position: {
        x: 300 - (file.width / resize / 2) * 2.5,
        y: 100,
        width: file.width / resize,
        height: file.height / resize,
        scale: 2.5,
        rotate: 0,
        aspect_ratio: file.width / file.height,
      },
    };
  }

  removeImage() {
    this.selectedUpload.image = null;
  }

  ngOnDestroy() {}
}

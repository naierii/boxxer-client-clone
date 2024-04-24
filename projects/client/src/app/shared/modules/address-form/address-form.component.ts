import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountryService } from './country.service';
import { CookieService } from '@gorniv/ngx-universal';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'bx-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit, OnDestroy {
  @Input()
  parentForm: FormGroup;
  @Input()
  address: any;
  @Input()
  groupName: string;
  @Input()
  showNames = false;
  @Input()
  showContact = false;
  @Output()
  public countryChanged: EventEmitter<any> = new EventEmitter<any>();
  loading = true;
  countries: any[] = [];
  addressGroup: FormGroup;
  filteredCountries: Observable<any[]>;

  matcher = new MyErrorStateMatcher();
  postcodeRequired = true;
  constructor(
    private fb: FormBuilder,
    public country: CountryService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.country
      .getCountries()
      .pipe(
        map((resp: any) => resp.data),
        untilComponentDestroyed(this)
      )
      .subscribe(resp => {
        this.countries = resp;
        this.createForm();
      });
  }

  createForm() {
    this.addressGroup = this.fb.group({
      address1: [
        this.address ? this.address.address1 : null,
        [Validators.required]
      ],
      address2: [this.address ? this.address.address2 : null],
      city: [this.address ? this.address.city : null, [Validators.required]],
      region: [this.address ? this.address.region : null],
      country_code: [
        this.address ? this.address.country_code : null,
        [Validators.required]
      ],
      country: [
        this.address ? this.address.country : null,
        [Validators.required]
      ],
      postcode: [this.address ? this.address.postcode : null]
    });

    if (this.showNames) {
      this.addressGroup.addControl(
        'firstName',
        this.fb.control(this.address ? this.address.firstName : null, [
          Validators.required
        ])
      );
      this.addressGroup.addControl(
        'lastName',
        this.fb.control(this.address ? this.address.lastName : null, [
          Validators.required
        ])
      );
    }

    if (this.showContact) {
      this.addressGroup.addControl(
        'phone',
        this.fb.control(this.address ? this.address.phone : null, [
          Validators.required
        ])
      );
    }
    this.parentForm.addControl(this.groupName, this.addressGroup);
    this.loading = false;

    this.subscribeCountryChange();
  }

  subscribeCountryChange() {
    if (this.address && this.address.country) {
      this.setPostCodeValidation(this.address.country);
    }

    const countryCodeCtrl = this.addressGroup.controls.country_code
      .valueChanges;
    const countryCtrl = this.addressGroup.controls.country.valueChanges;
    const postcodeCtrl = this.addressGroup.controls.postcode;
    countryCtrl.pipe(untilComponentDestroyed(this)).subscribe(value => {
      const searchCountry = this.countries.find(country => {
        return country.name.toLowerCase().indexOf(value.toLowerCase()) === 0;
      });
      this.setCountryCode(searchCountry);
    });
    countryCodeCtrl
      .pipe(untilComponentDestroyed(this))
      .subscribe(code => this.countryChanged.emit(code));

    // Set default country
    if (!this.address) {
      const countryCode = this.cookieService.get('country') || 'GB';
      const searchCountry = this.countries.find(country => {
        return (
          country.cca2.toLowerCase().indexOf(countryCode.toLowerCase()) === 0
        );
      });
      if (searchCountry) {
        this.addressGroup.controls.country.setValue(searchCountry.name);
      }
    }
  }

  setCountryCode(country: any) {
    this.addressGroup.controls.country_code.setValue(country.cca2);
    this.setPostCodeValidation(country.name);
  }

  setPostCodeValidation(country: string) {
    const postcodeCtrl = this.addressGroup.controls.postcode;
    if (country !== 'Ireland') {
      this.postcodeRequired = true;
      postcodeCtrl.setValidators([Validators.required]);
      postcodeCtrl.updateValueAndValidity();
    } else {
      this.postcodeRequired = false;
      postcodeCtrl.setValidators(null);
      postcodeCtrl.updateValueAndValidity();
    }
  }

  ngOnDestroy() {}
}

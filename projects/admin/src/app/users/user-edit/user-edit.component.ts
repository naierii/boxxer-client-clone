import { SocketService } from '@admin/shared/services/socket.service';
import { PasswordValidation } from '@admin/shared/validators/password-match';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { includes } from 'lodash';
import { untilComponentDestroyed } from '@global/untilDestroy';
import { of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './../user';

@Component({
  selector: 'bx-user-edit',
  templateUrl: './user-edit.component.html',
  providers: []
})
export class UserEditComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  user: User;
  private routeSub: Subscription;
  loading = true;
  isNew = false;
  public passwordType = 'password';
  public confirmPasswordType = 'password';
  roleOptions: Array<any> = [
    { value: 'Registered', key: 'registered' },
    { value: 'Staff', key: 'staff' },
    { value: 'Accounts', key: 'accounts' },
    { value: 'Admin', key: 'admin' },
    { value: 'Club', key: 'club' },
    { value: 'Seo', key: 'seo' },
    { value: 'Order Commenter', key: 'order_commenter' }
  ];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: SocketService
  ) {
    userService.setup('users');
  }

  ngOnInit() {
    this.route.params
      .pipe(
        untilComponentDestroyed(this),
        switchMap((params: any) => {
          if (params['id']) {
            return this.userService.findOne(params['id']);
          } else {
            this.isNew = true;
            return of({});
          }
        })
      )
      .subscribe((resp: any) => {
        this.user = resp;
        this.createForm();
        this.loading = false;
      });
  }

  createForm() {
    this.userForm = this.fb.group(
      {
        firstName: [this.user.firstName],
        lastName: [this.user.lastName],
        email: [this.user.email, [Validators.required, Validators.email]],
        password: [null],
        confirm_password: [null],
        roles: this.buildRoles(),
        body: [null]
      },
      {
        validator: PasswordValidation.MatchPassword
      }
    );
  }

  get roles(): FormArray {
    return this.userForm.get('roles') as FormArray;
  }

  buildRoles() {
    const arr = this.roleOptions.map(role => {
      const hasRole = includes(this.user.roles, role.key);
      return this.fb.group({
        key: this.fb.control(role.key),
        value: this.fb.control(role.value),
        checked: this.fb.control(hasRole)
      });
    });
    return this.fb.array(arr);
  }

  updateUser(data: any) {
    const roles = data.roles
      .filter(role => {
        return role.checked;
      })
      .map(role => role.key);
    data.roles = roles;
    if (data.password === null) {
      delete data.password;
    }
    if (this.isNew) {
      this.userService.create(data).subscribe(resp => {
        if (resp) {
          this.router.navigate(['./users']);
        }
      });
    } else {
      this.userService.update(this.user.userid, data).subscribe(resp => {
        if (resp) {
          this.router.navigate(['./users']);
        }
      });
    }
  }
  showHidePassword(){
    if(this.passwordType == 'password'){
      this.passwordType = 'text'
    }else{
      this.passwordType = 'password'
    }
  }
  showHideConfirmPassword(){
    if(this.confirmPasswordType == 'password'){
      this.confirmPasswordType = 'text'
    }else{
      this.confirmPasswordType = 'password'
    }
  }

  ngOnDestroy() {}
}

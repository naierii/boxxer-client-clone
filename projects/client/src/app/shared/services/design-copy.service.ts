import { Router } from '@angular/router';
import { CustomDesign } from '@global/models/custom-design';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '@app/core/modules/loading/loading.service';
import { tap, switchMap } from 'rxjs/operators';
import { environment } from '@env/environment';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDesignOverwriteComponent } from '@app/shared/components/confirm-design-overwrite/confirm-design-overwrite.component';
import { of } from 'rxjs';
import { CookieService } from '@gorniv/ngx-universal';

@Injectable()
export class DesignCopyService {
  private endpoint: string;
  private host: string = environment.host;
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private loading: LoadingService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.endpoint = 'custom-design-customiser';
  }

  get url() {
    return `${this.host}/${this.endpoint}`;
  }

  hasToken(product: string) {
    return this.cookieService.get(`custom-design-${product}`);
  }

  reorderDesign(design: any) {
    this.loading.show('Copying Design', '0px');
    design = {
      ...design,
      image: null,
      line_item: null,
      owner: null,
      svg: null
    };
    delete design._id;
    return this.checkIfDesign(design);
  }

  editDesign(design: any) {
    if (this.hasToken(design.product._id)) {
      const modalRef = this.dialog.open(ConfirmDesignOverwriteComponent, {
        data: { product: design.product._id },
        minWidth: '300px',
        maxWidth: '600px',
        autoFocus: false
      });
      return modalRef
        .afterClosed()
        .pipe(
          switchMap(confirmed => (confirmed ? this.setToken(design) : of(null)))
        );
    } else {
      return this.setToken(design);
    }
  }

  setToken(design: any) {
    this.cookieService.put(
      `custom-design-${design.product._id}`,
      design.token,
      { expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) }
    );
    this.router.navigate(['/customiser', design.product._id]);
    return of(true);
  }

  copyDesign(design: any) {
    this.loading.show('Copying Design', '0px');
    design = {
      ...design,
      flags: [],
      image: null,
      line_item: null,
      logos: [],
      names: [],
      owner: null,
      production: null,
      sizing: null,
      svg: null,
      uploads: []
    };
    delete design._id;
    return this.checkIfDesign(design);
  }

  private checkIfDesign(data: any) {
    if (this.hasToken(data.product._id)) {
      const modalRef = this.dialog.open(ConfirmDesignOverwriteComponent, {
        data: { product: data.product._id },
        minWidth: '300px',
        maxWidth: '600px',
        autoFocus: false
      });
      return modalRef
        .afterClosed()
        .pipe(
          switchMap(confirmed =>
            confirmed ? this.createDesign(data) : of(null)
          )
        );
    } else {
      return this.createDesign(data);
    }
  }

  private createDesign(data: any) {
    return this.http.post<any>(`${this.url}`, data).pipe(
      tap((resp: CustomDesign) => {
        this.cookieService.put(
          `custom-design-${data.product._id}`,
          resp.token,
          { expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) }
        );
        this.loading.hide();
      })
    );
  }
}

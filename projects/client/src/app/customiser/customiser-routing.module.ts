import { DesignResolverService } from './services/design-resolver.service';
import { CustomMuayThaiComponent } from './options/custom-muay-thai/custom-muay-thai.component';
import { CustomSizeOptionComponent } from './options/custom-size-option/custom-size-option.component';
import { CustomUploadOptionComponent } from './options/custom-upload-option/custom-upload-option.component';
import { CustomImageOptionComponent } from './options/custom-image-option/custom-image-option.component';
import { CustomFlagOptionComponent } from './options/custom-flag-option/custom-flag-option.component';
import { CustomNameOptionComponent } from './options/custom-name-option/custom-name-option.component';
import { CustomPanelOptionComponent } from './options/custom-panel-option/custom-panel-option.component';
import { CustomStyleOptionComponent } from './options/custom-style-option/custom-style-option.component';
import { ResolverService } from './services/resolver.service';
import { CustomiserComponent } from './customiser.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: ':id',
    component: CustomiserComponent,
    resolve: {
      design: ResolverService
    },
    children: [
      {
        path: '',
        redirectTo: 'design',
        pathMatch: 'full'
      },
      {
        path: 'design',
        component: NavComponent
      },
      {
        path: 'style/:id',
        component: CustomStyleOptionComponent,
        resolve: {
          design: DesignResolverService
        }
      },
      {
        path: 'panel/:id',
        component: CustomPanelOptionComponent,
        data: {
          toolbar: false,
          type: 'panel'
        }
      },
      {
        path: 'muay-thai',
        component: CustomMuayThaiComponent
      },
      {
        path: 'name',
        component: CustomNameOptionComponent
      },
      {
        path: 'name/:id',
        component: CustomNameOptionComponent
      },
      {
        path: 'flag',
        component: CustomFlagOptionComponent,
        data: {
          toolbar: true,
          type: 'flag'
        }
      },
      {
        path: 'flag/:id',
        component: CustomFlagOptionComponent,
        data: {
          toolbar: true,
          type: 'flag'
        }
      },
      {
        path: 'logo',
        component: CustomImageOptionComponent,
        data: {
          toolbar: true,
          type: 'logo'
        }
      },
      {
        path: 'logo/:id',
        component: CustomImageOptionComponent,
        data: {
          toolbar: true,
          type: 'logo'
        }
      },
      {
        path: 'upload',
        component: CustomUploadOptionComponent,
        data: {
          toolbar: true,
          type: 'upload'
        }
      },
      {
        path: 'upload/:id',
        component: CustomUploadOptionComponent,
        data: {
          toolbar: true,
          type: 'upload'
        }
      },
      {
        path: 'size',
        component: CustomSizeOptionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CustomiserRoutingModule {}

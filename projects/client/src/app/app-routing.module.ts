import { AuthGuard } from './shared/guards/auth.guard';
import { NotFoundComponent } from '@app/core/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from '@app/core/layout/main-layout/main-layout.component';
import { CheckoutLayoutComponent } from '@app/core/layout/checkout-layout/checkout-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'login',
        loadChildren: () =>
          import('@app/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('@app/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'custom-fightwear',
        loadChildren: () =>
          import('@app/custom/custom.module').then(m => m.CustomModule)
      },
      {
        path: 'club-kits',
        loadChildren: () =>
          import('@app/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'customiser',
        loadChildren: () =>
          import('@app/customiser/customiser.module').then(
            m => m.CustomiserModule
          )
      },
      {
        path: 'custom-equipment',
        loadChildren: () =>
          import('@app/custom/custom.module').then(m => m.CustomModule)
      },
      {
        path: 'ready-made',
        loadChildren: () =>
          import('@app/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'feedback',
        loadChildren: () =>
          import('@app/feedback/feedback.module').then(m => m.FeedbackModule)
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('@app/gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'gift-voucher',
        loadChildren: () =>
          import('@app/gift-voucher/gift-voucher.module').then(
            m => m.GiftVoucherModule
          )
      },
      {
        path: 'help-and-info/size-guide',
        loadChildren: () =>
          import('@app/size-guide/size-guide.module').then(
            m => m.SizeGuideModule
          )
      },
      {
        path: 'promotions',
        loadChildren: () =>
          import('@app/help/help.module').then(m => m.HelpModule)
      },
      {
        path: 'help-and-info',
        loadChildren: () =>
          import('@app/help/help.module').then(m => m.HelpModule)
      },
      {
        path: 'account',
        loadChildren: () =>
          import('@app/user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Account'
        }
      },
      {
        path: 'newsletter',
        loadChildren: () =>
          import('@app/newsletter/newsletter.module').then(
            m => m.NewsletterModule
          )
      },
      {
        path: '404',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: 'checkout',
    component: CheckoutLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./checkout/checkout.module').then(m => m.CheckoutModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 85]
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

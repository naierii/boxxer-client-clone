import { RoleGuard } from '@admin/core/guards/role.guard';
import { AuthGuard } from '@admin/core/guards/auth.guard';
import { NotAuthGuard } from '@admin/core/guards/not-auth.guard';
import { FullLayoutComponent } from '@admin/core/containers/full-layout/full-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from '@admin/core/containers/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      roles: ['registered']
    },
    children: [
      {
        path: 'blogs',
        loadChildren: () => import('@admin/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'custom-products',
        loadChildren:
          () => import('@admin/custom-products/custom-products.module').then(m => m.CustomProductsModule)
      },
      {
        path: 'custom-names',
        loadChildren:
          () => import('@admin/custom-names/custom-names.module').then(m => m.CustomNamesModule)
      },
      {
        path: 'custom-settings',
        loadChildren:
          () => import('@admin/custom-settings/custom-settings.module').then(m => m.CustomSettingsModule)
      },
      {
        path: 'custom-product-sizing',
        loadChildren:
          () => import('@admin/custom-sizing/custom-sizing.module').then(m => m.CustomSizingModule)
      },
      {
        path: 'custom-product-styles',
        loadChildren:
          () => import('@admin/custom-styles/custom-styles.module').then(m => m.CustomStylesModule)
      },
      {
        path: 'graphic-prices',
        loadChildren:
          () => import('@admin/graphic-price/graphic-price.module').then(m => m.GraphicPriceModule)
      },
      {
        path: 'ready-made',
        loadChildren: () => import('@admin/ready-made/ready-made.module').then(m => m.ReadyMadeModule)
      },
      {
        path: 'discounts',
        loadChildren: () => import('@admin/discounts/discounts.module').then(m => m.DiscountsModule)
      },
      {
        path: 'offers',
        loadChildren: () => import('@admin/offer/offer.module').then(m => m.OfferModule)
      },
      {
        path: 'flags',
        loadChildren: () => import('@admin/flags/flags.module').then(m => m.FlagsModule)
      },
      {
        path: 'logos',
        loadChildren: () => import('@admin/logos/logos.module').then(m => m.LogosModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('@admin/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'materials',
        loadChildren: () => import('@admin/materials/materials.module').then(m => m.MaterialsModule)
      },
      {
        path: 'sizing',
        loadChildren: () => import('@admin/sizing/sizing.module').then(m => m.SizingModule)
      },
      {
        path: 'email',
        loadChildren: () => import('@admin/email/email.module').then(m => m.EmailModule)
      },
      {
        path: 'pages',
        loadChildren: () => import('@admin/page/page.module').then(m => m.PageModule)
      },
      {
        path: 'shipping',
        loadChildren: () => import('@admin/shipping/shipping.module').then(m => m.ShippingModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('@admin/gallery/gallery.module').then(m => m.GalleryModule)
      },
      {
        path: 'users',
        loadChildren: () => import('@admin/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('@admin/category/category.module').then(m => m.CategoryModule),
        data: {
          query: {
            product_attribute: false
          }
        }
      },
      {
        path: 'product-attributes',
        loadChildren: () => import('@admin/category/category.module').then(m => m.CategoryModule),
        data: {
          query: {
            product_attribute: true
          }
        }
      },
      {
        path: 'expenses',
        loadChildren: () => import('@admin/expenses/expenses.module').then(m => m.ExpensesModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('@admin/reports/reports.module').then(m => m.ReportsModule)
      }
    ]
  },
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    canActivate: [NotAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('@admin/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'error',
    component: SimpleLayoutComponent,
    data: {
      title: 'Error'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('@admin/error/error.module').then(m => m.ErrorModule)
      }
    ]
  },
  { path: '**', redirectTo: '/error/notfound' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

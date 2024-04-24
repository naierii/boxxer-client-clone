import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '@admin/core/guards/role.guard';
import { ExpensesEditComponent } from '@admin/expenses/expenses-edit/expenses-edit.component';
import { ExpensesViewComponent } from './expenses-view/expenses-view.component';

const routes: Routes = [
  {
    path: 'my-new-flat',
    component: ExpensesListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
      category: '5cdfccd116889e77cbb374dc',
      company: 'My New Flat'
    }
  },
  {
    path: 'my-new-flat/new',
    component: ExpensesEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
      category: '5cdfccd116889e77cbb374dc',
      company: 'My New Flat'
    }
  },
  {
    path: 'my-new-flat/:id',
    component: ExpensesViewComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
      category: '5cdfccd116889e77cbb374dc',
      company: 'My New Flat'
    }
  },
  {
    path: 'my-new-flat/:id/edit',
    component: ExpensesEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
      category: '5cdfccd116889e77cbb374dc',
      company: 'My New Flat'
    }
  },
  {
    path: '',
    component: ExpensesListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
      category: '54b2827e4b529ed9e1ae0f3f',
      company: 'Boxxerworld'
    }
  },
  {
    path: 'new',
    component: ExpensesEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
      category: '54b2827e4b529ed9e1ae0f3f',
      company: 'Boxxerworld'
    }
  },
  {
    path: ':id',
    component: ExpensesViewComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
      category: '54b2827e4b529ed9e1ae0f3f',
      company: 'Boxxerworld'
    }
  },
  {
    path: ':id/edit',
    component: ExpensesEditComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
      category: '54b2827e4b529ed9e1ae0f3f',
      company: 'Boxxerworld'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule {}

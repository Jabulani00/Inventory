import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'add-inventory',
    loadChildren: () =>
      import('./add-inventory/add-inventory.module').then(
        (m) => m.AddInventoryPageModule
      ),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./analytics/analytics.module').then(
        (m) => m.AnalyticsPageModule
      ),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./view/view.module').then(
        (m) => m.ViewPageModule
      ),
  },
  {
    path: 'barcode-scanner',
    loadChildren: () =>
      import('./barcode-scanner/barcode-scanner.module').then(
        (m) => m.BarcodeScannerPageModule
      ),
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./invoice/invoice.module').then((m) => m.InvoicePageModule),
  },
  {
    path: 'inventory',
    loadChildren: () =>
      import('./inventory/inventory.module').then(
        (m) => m.InventoryPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'storeroom',
    loadChildren: () =>
      import('./storeroom/storeroom.module').then(
        (m) => m.StoreroomPageModule
      ),
  },
  {
    path: 'add-inventory-storeroom',
    loadChildren: () =>
      import('./add-inventory-storeroom/add-inventory-storeroom.module').then(
        (m) => m.AddInventoryStoreroomPageModule
      ),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./update/update.module').then((m) => m.UpdatePageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'reset',
    loadChildren: () =>
      import('./reset/reset.module').then((m) => m.ResetPageModule),
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./manager/manager.module').then( m => m.ManagerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

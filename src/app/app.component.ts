import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Add store Inventory', url: '/folder/add-inventory', icon: 'add-circle' },
    { title: 'Add Storeroom Inventory', url: '/folder/add-inventory-storeroom', icon: 'add-circle' },
    { title: 'Update Store', url: '/folder/update', icon: 'create' },
    { title: 'View Store', url: '/folder/view', icon: 'eye' },
    { title: 'View Storeroom', url: '/folder/storeroom', icon: 'archive' },
    { title: 'Invoice Slips', url: '/folder/invoice', icon: 'receipt' },
    { title: 'Analytics', url: '/folder/analytics', icon: 'analytics' },
  ];
 
  constructor() {}
}

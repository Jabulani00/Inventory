import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {
  segment: string = 'addInventory';
  managerOptions = [
    {
      value: 'addInventory',
      label: 'Add Inventory to StoreRoom',
      icon: 'add-circle-outline',
      description: 'Add new items to the store room inventory.',
    },
    {
      value: 'moveToStore',
      label: 'Move Inventory to Store',
      icon: 'play-forward-outline',
      description: 'move Inventory from storeroom to store.',
    },
    {
      value: 'UpdateStore',
      label: 'Update Store Inventory',
      icon: 'arrow-undo-circle-outline',
      description: 'Update items at the store  inventory.',
    },
    {
      value: 'viewAnalytics',
      label: 'View Analytics',
      icon: 'analytics-outline',
      description: 'View sales and inventory analytics for your business.',
    },
    {
      value: 'viewInventory',
      label: 'View Shop Inventory',
      icon: 'list-outline',
      description: 'View the current inventory of your shop.',
    },
    {
      value: 'viewUsers',
      label: 'View StoreRoom',
      icon: 'people-outline',
      description: 'View  StoreRoom.',
    },
    {
      value: 'viewInvoices',
      label: 'View Invoices',
      icon: 'receipt-outline',
      description: 'View and manage invoices for your shop.',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  segmentChanged(value: string) {
    this.segment = value;
    switch (this.segment) {
      case 'addInventory':
        this.router.navigate(['add-inventory-storeroom']);
        break;
      case 'viewAnalytics':
        this.router.navigate(['analytics']);
        break;
      case 'viewStore':
        this.router.navigate(['view']);
        break;
      case 'viewUsers':
        this.router.navigate(['storeroom']);
        break;
      case 'viewInvoices':
        this.router.navigate(['invoice']);
        break;
      case 'moveToStore':
        this.router.navigate(['add-inventory']);
        break;
      case 'UpdateStore':
        this.router.navigate(['update']);
        break;
      default:
        // Handle default case or error
        break;
    }
  }
}
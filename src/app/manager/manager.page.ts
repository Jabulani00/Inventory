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
      case 'viewInventory':
        this.router.navigate(['view']);
        break;
      case 'viewUsers':
        this.router.navigate(['storeroom']);
        break;
      case 'viewInvoices':
        this.router.navigate(['invoice']);
        break;
      default:
        // Handle default case or error
        break;
    }
  }
}
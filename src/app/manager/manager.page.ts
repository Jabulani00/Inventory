import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {
  segment: string = 'add-inventory';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  segmentChanged(event: CustomEvent) {
    this.segment = event.detail.value as string;
    switch (this.segment) {
      case 'addInventory':
        this.router.navigate(['add-inventory']);
        break;
      case 'viewAnalytics':
        this.router.navigate(['analytics']);
        break;
      case 'viewInventory':
        this.router.navigate(['inventory']);
        break;
      case 'viewUsers':
        this.router.navigate(['profile']);
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

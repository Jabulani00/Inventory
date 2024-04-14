import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  slips: any[] = []; // Define a variable to store fetched slips

  constructor(private firestore: AngularFirestore) { } // Inject AngularFirestore

  ngOnInit() {
    this.fetchSlips(); // Call the method to fetch slips when the component initializes
  }

  fetchSlips() {
    this.firestore.collection('slips').valueChanges().subscribe((slips: any[]) => {
      this.slips = slips; // Assign fetched slips to the variable
    }, error => {
      console.error('Error fetching slips:', error);
      // Handle error
    });
  }

}

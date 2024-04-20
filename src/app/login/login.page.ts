import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  defaultAdminEmail = 'admin@best.com';
  defaultAdminPassword = '@bestB1234';
  private usersCollection: AngularFirestoreCollection<any>;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {
    this.usersCollection = this.firestore.collection('Users');
  }

  ngOnInit() {}

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top',
    });
    toast.present();
  }

  async login() {
    const email = this.email.trim();
    const password = this.password.trim();

    const loader = await this.loadingController.create({
      message: 'Logging in...',
      cssClass: 'custom-loader-class',
    });
    await loader.present();

    try {
      // Query Firestore to find the document with the matching email
      const userQuerySnapshot = await this.usersCollection.ref.where('email', '==', email).get();
      if (userQuerySnapshot.empty) {
        loader.dismiss();
        this.presentToast('User does not exist', 'danger');
        return;
      }

      if (email === this.defaultAdminEmail && password === this.defaultAdminPassword) {
        await this.auth.signInWithEmailAndPassword(email, password);
      }

      loader.dismiss();
      this.router.navigate(['/manager']);
    } catch (error: any) {
      loader.dismiss();
      const errorMessage = error.message || 'An unknown error occurred.';

      if (errorMessage.includes('wrong-password')) {
        this.presentToast('Incorrect password', 'danger');
      } else if (errorMessage.includes('user-not-found')) {
        this.presentToast('User does not exist', 'danger');
      } else {
        this.presentToast(errorMessage, 'danger');
      }
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router'; 
import { LoadingController, ToastController } from '@ionic/angular'; // Import ToastController

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string = '';
  email: string = '';
  password: string = '';
  confirm_password: string = '';
  selectedRole: string = '';
  employeeID: string="";

  constructor(
    private db: AngularFirestore,
    private Auth: AngularFireAuth,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController // Inject ToastController
  ) { }

  ngOnInit() {
  }

  async register() {
    if (this.name === '' || this.email === '' || this.password === '') {
      this.presentToast('Please fill in all fields');
      return;
    }

    if (this.password !== this.confirm_password) {
      this.presentToast('Passwords do not match');
      return;
    }

    if (this.employeeID !== 'picker@02' && this.employeeID !== 'manager@02') {
      this.presentToast('Only employees are allowed');
      return;
    }

    const loader = await this.loadingController.create({
      message: '|Registering you...',
      cssClass: 'custom-loader-class'
    });

    await loader.present();
    this.Auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential: any) => {
        if (userCredential.user) {
          this.db.collection('Users').add(
            {
              name: this.name,
              email: this.email,
              role: this.selectedRole,
              roleId: this.employeeID,
            }
          )
            .then(() => {
              loader.dismiss();
              console.log('User data added successfully');
              this.router.navigate(['/login']);
            })
            .catch((error: any) => {
              loader.dismiss();
              console.error('Error adding user data:', error);
            });
        } else {
          console.error('User credential is missing');
        }
      })
      .catch((error: any) => {
        loader.dismiss();
        console.error('Error creating user:', error);
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}

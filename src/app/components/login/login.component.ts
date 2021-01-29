import { Component, OnInit, NgZone } from '@angular/core';
// Formularios
import { FormBuilder, Validators } from '@angular/forms';
// Firebase Autorizacion
import { AngularFireAuth } from '@angular/fire/auth';
//Rutas
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public titulo:string;
  errorMessage = '';

  constructor(private afAuth: AngularFireAuth, private router: Router,  private fb: FormBuilder, private ngZone: NgZone) {
    this.titulo = "Acceso al Panel de Control";
   }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
    // Verificar si el usuario se encuentra logueado
    this.afAuth.user.subscribe(user => {
      if(user){
        this.ngZone.run(() => {
          this.router.navigate(['/blog/crear']);
        })
      }
    });
  }

  // Loguearse para entrar en el Panel de control
  signIn() {
    this.afAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(() => {
       this.router.navigate(['/blog/crear']);
     }).catch(response => {
       this.errorMessage = response.message;
     });
  }
}

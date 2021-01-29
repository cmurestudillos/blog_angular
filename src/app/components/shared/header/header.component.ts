import { Component, OnInit } from '@angular/core';
// Autentificacion Firebase
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  public admin:boolean;
  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe(user => {
      if(user){
        this.admin = false;
      }else{
        this.admin = true;
      }
    });
  }

}

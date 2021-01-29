import { Component, OnInit, NgZone } from '@angular/core';
// Rutas
import { ActivatedRoute, Router } from '@angular/router';
// Autentificacion Firebase
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public searchString: string;
  public admin:boolean;

  constructor(private _route: ActivatedRoute, private _router: Router, private afAuth: AngularFireAuth, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe(user => {
      if(user){
        this.admin = false;
      }else{
        this.admin = true;
      }
    });
  }

  // Buscar articulos
  buscar(){
    this._router.navigate(['/buscar', this.searchString]);
  }

}

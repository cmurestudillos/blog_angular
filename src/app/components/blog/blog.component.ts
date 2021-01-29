import { Component, OnInit } from '@angular/core';
// Servicios
import { ArticulosService } from '../../services/articulos.service';
// Modelo
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  public titulo:string;
  articulos: Articulo[] = [];

  constructor(private _service: ArticulosService) {
    this.titulo = 'Blog';
  }

  ngOnInit(): void {
    this._service.getAllArticulos()
    .subscribe(data => {
      this.articulos = data
    });
  }
}

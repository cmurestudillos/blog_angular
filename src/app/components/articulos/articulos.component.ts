import { Component, OnInit, Input } from '@angular/core';
// Modelo
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html'
})
export class ArticulosComponent implements OnInit {
  @Input() articulos:Articulo[];
  constructor() { }

  ngOnInit(): void {
  }

}

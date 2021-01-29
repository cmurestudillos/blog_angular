import { Injectable } from '@angular/core';
// Peticiones Http
import { HttpClient } from '@angular/common/http';
// Modelo
import { Articulo } from '../models/articulo';
// Operadores
import { map, delay } from 'rxjs/operators';
// Url de API
import { Global } from "../api/global";

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  public url:string;
  articulos:any [] = [];

  constructor(private _http: HttpClient) {
    this.url = Global.url;
   }

  // Peicion para obtener el listado de todos los articulos
  getAllArticulos(){
    return this._http.get(`${this.url}/articulos.json`)
                .pipe(map( resp => this.crearArray(resp)),
                  delay(500)
                );
  }

  // Peticion para obtener el listado de los ultimos articulos
  getLastArticulos(){
    return this._http.get(this.url +'/articulos.json?')
               .pipe(map( resp => this.ordenarArray(resp)),
                 delay(500)
               );
  }

  // Peticicion para obtener un articulo en concreto
  getArticuloById(id:string){
    return this._http.get(`${this.url}/articulos/${id}.json`)
  }

  // Logica para mostrar el objeto de los articulos recibido en el 'resp'
  // del map y devolverlo transofrmado en un Array para mostrar
  // en pantalla
  private crearArray( articulosObj: Object ){

    const articulos: Articulo[]=[];
    if(articulosObj === null){
      return [];
    }

    Object.keys(articulosObj).forEach( key => {
      const articulo: Articulo = articulosObj[key];
      articulo.id = key;
      // Devolvemos en el Array el objeto extraido
      articulos.push(articulo);

    });

    return articulos;
  }

  // Logica para mostrar el objeto  buscado recibido en el 'resp'
  // del map y devolverlo transofrmado en un Array para mostrar
  // en pantalla
  private buscarArray( articulosObj: Object, search: string ){

    const articulos: Articulo[]=[];
    if(articulosObj === null){
      return [];
    }

    Object.keys(articulosObj).forEach( key => {
      const articulo: Articulo = articulosObj[key];
      if(articulo.titulo == search || articulo.contenido == search){
        articulo.id = key;
        // Devolvemos en el Array el objeto extraido
        articulos.push(articulo);
      }
    });

    return articulos;
  }

  // Logica para mostrar los ultimos 5 objetos creados en el 'resp'
  // del map y devolverlo transofrmado en un Array para mostrar
  // en pantalla
  private ordenarArray( articulosObj: Object){

    var articulos: any[]=[];
    if(articulosObj === null){
      return [];
    }

    Object.keys(articulosObj).reverse().forEach( key => {
      const articulo: Articulo = articulosObj[key];
      var index: number;
      if(articulos.length <= 4){
        articulo.id = key;
        // Devolvemos en el Array el objeto extraido
        articulos.push(articulo);
        index++;
      }

    });

    return articulos;
  }

  // Buscador de articulos
  buscarArticulo( searchString:string ){
    return this._http.get(`${this.url}/articulos.json`)
                .pipe(map( resp =>this.buscarArray(resp, searchString)),
                  delay(500)
                );
  }

  //Peticion para crear un articulo nuevo
  crearArticulo(articulo:Articulo){
    articulo.fecha = new Date();
    return this._http.post(`${this.url}/articulos.json`, articulo)
                .pipe(map( (resp: any) => {
                  articulo.id = resp.name;
                    return articulo;
                  })
                );
  }

  //Peticion para actualizar el articulo seleccionado
  editarArticulo(articulo:Articulo){
    const articuloTemporal = {
      // El spread se encarga de mandar todas la proiedades
      // sin necesidad de escribir todas una a una
      ...articulo
    }
    delete articuloTemporal.id;
    return this._http.put(`${this.url}/articulos/${articulo.id}.json`, articuloTemporal);
  }

  // Peticion para borrar el articulo seleccionado
  borrarArticulo(id:string){
    return this._http.delete(`${this.url}/articulos/${id}.json`)
  }

}

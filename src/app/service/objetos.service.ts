import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {
  
  arregloObj= [{
    nombre: 'Mario',
    email: 'mcampohe@gmail.com'
  },
  {
    nombre: 'Juan',
    email: 'juan@gmail.com'
  },
  {
    nombre: 'Pedro',
    email: 'pedro@gmail.com'
  }
  ,
  {
    nombre: 'Diego',
    email: 'diego@gmail.com'
  }
]
  constructor() { }
  getData(){
    return this.arregloObj;
  }
}

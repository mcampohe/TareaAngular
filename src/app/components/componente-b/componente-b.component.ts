import { Component, OnInit } from '@angular/core';
import { ObjetosService } from 'src/app/service/objetos.service';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']

})
export class ComponenteBComponent implements OnInit {

  obj = [{}];
 
  constructor(private service: ObjetosService) { }
  
  ngOnInit(): void {

    for (let i=0; i < this.service.getData().length; i++){
      this.obj.push(this.service.getData()[i].nombre +'   -   '+this.service.getData()[i].email); 
      //console.log(this.service.getData()[i].nombre);
    }

  }
 
  

}

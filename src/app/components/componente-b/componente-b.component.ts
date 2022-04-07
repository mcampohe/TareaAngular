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
    this.obj = this.service.getData();
    
    console.log(this.obj);

  }
  

}

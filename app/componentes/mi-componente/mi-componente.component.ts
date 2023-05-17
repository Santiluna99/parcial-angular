import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {

  Bebidas=["Coca","Sprite","Gatorade","Fanta"];
  BebidasCA=["Cerveza","Vino","Champagne","Ron"];
  dia:number=0
  mes:number=0
  ano:number=0

}

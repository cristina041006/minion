import { Component, Input } from '@angular/core';
import { Minion } from '../interfaces/minions'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {
  @Input() minions :Minion[] = []
  @Input() minion :Minion[] |undefined;
  @Input() bandera :boolean = false;
  favorite : number[] =[]

like(posicion :number){
  this.favorite.push(posicion)
}
nolike(posicion :number){
  this.favorite.splice(this.favorite[posicion])
}

}

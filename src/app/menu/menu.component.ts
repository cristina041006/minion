import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  buscoNombre :string = "";
  @Output() busqueda = new EventEmitter<string>();

  enviar(){
    this.busqueda.emit(this.buscoNombre);
  }

}

import { Component } from '@angular/core';
import { FormsModule, NgModel, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'

})
export class TemplateFormsComponent {
  user = {
    nombre: '',
    apellido: '',
    correo: ''
  };
  datos: string = '';
  guardarUsuario(){
    console.log("Usuario: " + this.user.nombre)
    console.log("Apellido: " + this.user.apellido)
    console.log("Correo: " + this.user.correo)
    this.imprimir()
  }
  imprimir(){
    this.datos = `Usuario guardado: ${this.user.nombre} ${this.user.apellido}, Correo: ${this.user.correo}`;
    return this.datos;
  }
}
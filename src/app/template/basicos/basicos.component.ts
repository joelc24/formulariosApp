import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm


  nombreValido(): boolean{
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched
  }
  
  precioValido(): boolean{
    return this.miFormulario?.controls['precio']?.invalid && this.miFormulario?.controls['precio']?.touched
  }

  guardar(){

  }

}
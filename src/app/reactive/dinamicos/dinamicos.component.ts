import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('',Validators.required)

  constructor(private fb: FormBuilder) {  }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }
  
  validarCampo(campo:string){
    return this.miFormulario.get(campo)?.errors && this.miFormulario.get(campo)?.touched
  }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {
      return
    }

    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset()
  }

  borrar(index: number){
    this.favoritosArr.removeAt(index)
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
  }

}

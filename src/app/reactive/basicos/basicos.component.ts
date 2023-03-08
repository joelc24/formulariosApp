import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.patchValue({
      nombre: 'RTX 4080ti',
      precio: 1600
    })
  }


  campoValido(campo:string){
    return this.miFormulario.get(campo)?.errors && this.miFormulario.get(campo)?.touched
  }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }

    this.miFormulario.reset()
  }

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(15000),
  //   existencias: new FormControl(5),
  // })



}

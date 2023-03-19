import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }


  constructor(private fb: FormBuilder) {
    
    
  }
  ngOnInit(): void {
    this.miFormulario.patchValue(this.persona)

    this.miFormulario.valueChanges.subscribe((form)=>{
      delete form.condiciones
      this.persona = form
    })
  }

  guardar(){
    const formValue = {...this.miFormulario.value}
    delete formValue.notificaciones
    this.persona = formValue
    
  }

}

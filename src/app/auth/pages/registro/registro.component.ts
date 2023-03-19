import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['',[Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [this.emailValidator]],
    username: ['', [Validators.required, noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.camposIguales('password','password2')]
  })

  
  get emailErrorMsg(): string{
    const errors = this.miFormulario.get('email')?.errors
    if (errors?.['required']) {
      return 'El email es obligatorio'
    }else if (errors?.['pattern']) {
      return 'El email no tiene formato de correo electronico'
    }else if(errors?.['emailTomado']){
      return 'El email ya fue tomado'
    }
    return ''
  }

  constructor(
      private fb: FormBuilder, private validatorService: ValidatorService,
      private emailValidator: EmailValidatorService
    ){}

  ngOnInit(): void {
    this.miFormulario.patchValue({
      nombre: 'Joel Camargo',
      email: 'test1@test.com',
      username: 'joelc27',
      password: '123456',
      password2: '123456',
    })
  }

  validarError(campo:string){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched
  }



  submitFormulario(){

    console.log(this.miFormulario)

    this.miFormulario.markAllAsTouched()
  }
}

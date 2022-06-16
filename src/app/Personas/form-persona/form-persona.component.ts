import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MensajesModule } from 'src/app/mensajes/mensajes.module';
import { Persona } from '../Persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  constructor(private fb: FormBuilder,private personaService: PersonaService, private mensaje : MensajesModule ) { }
  formGroup = this.fb.group({
    cedula: ['', [Validators.required]],
    nombre: ['', [Validators.required]]
  });
  save() {
    let persona: Persona = Object.assign({}, this.formGroup.value);
   console.table(persona)
    if (this.formGroup.valid) {
      this.personaService.post(persona)
        .subscribe(persona => this.mensaje.mensajeAlertaCorrecto("Guardado con exito"),
          error => this.mensaje.mensajeAlertaError( error.toString()));
    } else {
      this.mensaje.mensajeAlertaError('El formGroup del Curso no es valido');
    }
  }
  ngOnInit(): void {
  }
  get cedula() {
    return this.formGroup.get('cedula');
  }
  get nombre() {
    return this.formGroup.get('nombre');
  }
}

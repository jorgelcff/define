import { Component } from "@angular/core";
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-formulario",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./formulario.component.html",
  styleUrl: "./formulario.component.css",
})
export class FormularioComponent {
  today = new Date().toISOString().split("T")[0];
  todaymoremonth = new Date(new Date().setMonth(new Date().getMonth() + 1))
    .toISOString()
    .split("T")[0];
  form = this.fb.group({
    NOME: ["", Validators.required],
    ATIVIDADE: ["", Validators.required],
    DATA: ["", Validators.required],
  });
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  getNome() {
    return this.form.controls.NOME.value!;
  }
  getAtividade() {
    return this.form.controls.ATIVIDADE.value!;
  }
  getData() {
    return this.form.controls.DATA.value!;
  }

  validForm() {
    return this.form.valid;
  }

  enviarFormulario() {
    const numero = "+5581979025772";
    const mensagem = `Olá DefineFitness. Eu me chamo ${this.getNome()}!\nEscolhi a atividade experimental: ${this.getAtividade()} para o dia ${this.getData()}, tudo certo?`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    console.log(mensagemCodificada);
    const linkWhatsApp = `https://wa.me/${numero}?text=${mensagemCodificada}`;

    window.open(linkWhatsApp, "_blank");
  }

  getInvalidFields() {
    const invalidFields: string[] = [];
    Object.keys(this.form.controls).forEach((key) => {
      const control =
        this.form.controls[key as keyof typeof this.form.controls];
      if (control.invalid) {
        invalidFields.push(key);
      }
    });
    return invalidFields;
  }

  submit() {
    console.log(this.form);
    if (this.validForm()) {
      return this.enviarFormulario();
    }

    return this.toastr.error(
      `${this.getInvalidFields()}`,
      "Verifique os campos abaixo:"
    );
  }
}

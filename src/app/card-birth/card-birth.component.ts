import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-birth',
  templateUrl: './card-birth.component.html',
  styleUrls: ['./card-birth.component.scss']
})
export class CardBirthComponent {
 tabNom : string [] = ["Parent","Autre"]
 currentStep =1;
 demandeExtraitForm: FormGroup;
 constructor(private formBuilder: FormBuilder){ 
  this.demandeExtraitForm=this.formBuilder.group({
    nomPere:[null, Validators.required],
    prenomPere:[null,Validators.required],
    dateNaissancePere:[null,Validators.required],
    lieuNaissancePere:[null,Validators.required],
    professionPere:[null,Validators.required],
    adressePere:[null,Validators.required],
    telephonePere:[null,Validators.required],
    nomMere:[null, Validators.required],
    prenomMere:[null,Validators.required],
    dateNaissanceMere:[null,Validators.required],
    lieuNaissanceMere:[null,Validators.required],
    professionMere:[null,Validators.required],
    adresseMere:[null,Validators.required],
    telephoneMere:[null,Validators.required]
    })
 }
  // Autres champs nécessaires


  onNext() {
    this.currentStep++;
  }

  onPrevious() {
    this.currentStep--;
  }
  onSubmit() {
    if (this.demandeExtraitForm.valid) {
      const demande = this.demandeExtraitForm.value;
      // Envoyez la demande au serveur ou effectuez d'autres opérations ici
      console.log('Demande soumise avec succès!', demande);
    }
  }

 onFormSubmit(f:NgForm){
  if(f.valid){
    console.log("form submitted");
  } else {
    alert('Please fill all fields');
  }
 }
}

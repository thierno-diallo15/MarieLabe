import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-card-birth',
  templateUrl: './card-birth.component.html',
  styleUrls: ['./card-birth.component.scss']
})
export class CardBirthComponent implements OnInit {
 tabNom : string [] = ["Parent","Autre"]
 currentStep = 1;
 hasText: boolean = false;
 demandeExtraitForm1 !: FormGroup;
 demandeExtraitForm2 !: FormGroup;
 demandeExtraitForm3 !: FormGroup;

 constructor(private formBuilder: FormBuilder){ 
 }
  // Autres champs nécessaires

  ngOnInit(): void {
    this.demandeExtraitForm1 =this.formBuilder.group({
      demandeurPrenom:[null, Validators.required],
      demandeurNom:[null,Validators.required],
      demandeurSexe:[null,Validators.required],
      demandeurRang:[null,Validators.required],
      demandeurDateNaiss:[null,Validators.required],
      demandeurLieuNaiss:[null,Validators.required],
      demandeurNationalite:[null,Validators.required]
      })

      this.demandeExtraitForm1.get('demandeurPrenom')?.valueChanges.subscribe( res =>{
        this.hasText = res.trim() !== ''
      })
  }

  onNext() {
    this.currentStep++;
  }

  onPrevious() {
    this.currentStep--;
  }
  onSubmit() {
    if (this.demandeExtraitForm1.valid) {
      const demande = this.demandeExtraitForm1.value;
      // Envoyez la demande au serveur ou effectuez d'autres opérations ici
      console.log('Demande soumise avec succès!', demande);
    }
  }

  // Que des lettres
  onKeyPress(event: KeyboardEvent) {
    // Empêcher la saisie de chiffres
    if (event.key && /^[a-zA-ZÀ-ÿ\s']$/.test(event.key)) {
      event.preventDefault();
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

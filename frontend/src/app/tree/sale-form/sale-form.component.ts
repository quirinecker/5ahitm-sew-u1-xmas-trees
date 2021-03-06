import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss']
})
export class SaleFormComponent {
  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    country: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(1), Validators.maxLength(5)])
    ],
  });

  hasUnitNumber = false;

  constructor(
      private fb: FormBuilder,
      private router: Router
  ) {}

  async onSubmit(): Promise<void> {
    await this.router.navigate(['pay-pall'])
  }
}

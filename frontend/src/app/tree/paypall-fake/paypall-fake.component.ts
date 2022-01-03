import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {BackendService, ITree} from "../../shared/backend.service";
import {SellDateService} from "../../shared/sell-date.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-paypall-fake',
  templateUrl: './paypall-fake.component.html',
  styleUrls: ['./paypall-fake.component.scss']
})
export class PaypallFakeComponent {
  addressForm = this.fb.group({
    email: [null,  [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
  });

  public tree: ITree | null;

  hasUnitNumber = false;

  constructor(
      private fb: FormBuilder,
      private dataService: SellDateService,
      private backend: BackendService,
      private router: Router
  ) {
    this.tree = dataService.tree;
  }

  async onSubmit(): Promise<void> {
    try {
      if (this.tree) {
        this.backend.buy(this.tree)
        this.router.navigate(['*'])
      }
    } catch (e) {
      console.log(e)
    }
  }
}

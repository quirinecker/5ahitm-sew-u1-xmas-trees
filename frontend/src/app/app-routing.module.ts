import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TreeComponent} from "./tree/tree.component";
import {SaleComponent} from "./tree/sale/sale.component";
import {PaypallFakeComponent} from "./tree/paypall-fake/paypall-fake.component";

const routes: Routes = [
    {path: 'tree', component: TreeComponent},
    {path: 'sale', component: SaleComponent},
    {path: 'pay-pall', component: PaypallFakeComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
